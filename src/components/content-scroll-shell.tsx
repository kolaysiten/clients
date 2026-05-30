"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ContentScrollShellProps = Readonly<{
  children: ReactNode;
}>;

type ScrollMetrics = {
  contentHeight: number;
  viewportHeight: number;
};

export default function ContentScrollShell({ children }: ContentScrollShellProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<ScrollMetrics>({ contentHeight: 0, viewportHeight: 0 });
  const [proxyHeight, setProxyHeight] = useState("100svh");

  useEffect(() => {
    let animationFrame = 0;

    const syncScroll = () => {
      animationFrame = 0;

      const shell = shellRef.current;
      if (!shell) {
        return;
      }

      const { contentHeight, viewportHeight } = metricsRef.current;
      const maxOffset = Math.max(0, contentHeight - viewportHeight);
      const scrollOffset = Math.min(Math.max(window.scrollY, 0), maxOffset);

      shell.style.setProperty("--site-scroll-y", `${scrollOffset}px`);
    };

    const scheduleScrollSync = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(syncScroll);
    };

    const measure = () => {
      const shell = shellRef.current;
      const content = contentRef.current;

      if (!shell || !content) {
        return;
      }

      const viewportHeight = shell.clientHeight;
      const contentHeight = content.scrollHeight;
      const frameOffset = Math.max(0, window.innerHeight - viewportHeight);
      const nextProxyHeight = `${Math.ceil(Math.max(window.innerHeight, contentHeight + frameOffset))}px`;

      metricsRef.current = { contentHeight, viewportHeight };
      setProxyHeight((currentHeight) => (currentHeight === nextProxyHeight ? currentHeight : nextProxyHeight));
      scheduleScrollSync();
    };

    const resizeObserver = new ResizeObserver(measure);

    if (shellRef.current) {
      resizeObserver.observe(shellRef.current);
    }

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    measure();

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", scheduleScrollSync, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", scheduleScrollSync);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const keepFocusedElementVisible = (event: FocusEvent) => {
      const shell = shellRef.current;
      const target = event.target;

      if (!(target instanceof HTMLElement) || !shell?.contains(target)) {
        return;
      }

      window.requestAnimationFrame(() => {
        const shellRect = shell.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const breathingRoom = 24;

        if (targetRect.top < shellRect.top + breathingRoom) {
          window.scrollBy({ top: targetRect.top - shellRect.top - breathingRoom, behavior: "smooth" });
          return;
        }

        if (targetRect.bottom > shellRect.bottom - breathingRoom) {
          window.scrollBy({ top: targetRect.bottom - shellRect.bottom + breathingRoom, behavior: "smooth" });
        }
      });
    };

    document.addEventListener("focusin", keepFocusedElementVisible);

    return () => {
      document.removeEventListener("focusin", keepFocusedElementVisible);
    };
  }, []);

  return (
    <>
      <div className="site-scroll-proxy" style={{ "--site-proxy-height": proxyHeight } as CSSProperties} />
      <div className="site-content-walls" aria-hidden="true" />
      <div ref={shellRef} className="site-content-shell">
        <div ref={contentRef} className="site-content-scroll">
          {children}
        </div>
      </div>
    </>
  );
}
