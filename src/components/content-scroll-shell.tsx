import type { ReactNode } from "react";

type ContentScrollShellProps = Readonly<{
  children: ReactNode;
}>;

export default function ContentScrollShell({ children }: ContentScrollShellProps) {
  return (
    <div className={styles.shell}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  shell:
    "relative z-10 mx-auto mt-[var(--site-content-top)] min-h-[calc(100dvh-var(--site-content-top))] w-[min(calc(100vw-(var(--site-page-gutter)*2)),var(--site-content-max))] isolate overflow-hidden bg-[var(--site-surface)]",
  content: "min-h-full bg-[var(--site-surface)]",
} as const;
