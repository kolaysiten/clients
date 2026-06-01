import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LandingContentTitleElement = "h1" | "h2" | "h3" | "div";

export type LandingContentProps = Omit<ComponentPropsWithoutRef<"div">, "children" | "content" | "title"> & {
  title: ReactNode;
  children?: ReactNode;
  content?: ReactNode;
  titleAs?: LandingContentTitleElement;
  titleClassName?: string;
  contentClassName?: string;
};

export default function LandingContent({
  children,
  className,
  content,
  contentClassName,
  title,
  titleAs = "h2",
  titleClassName,
  ...props
}: LandingContentProps) {
  const Title = titleAs;
  const sectionContent = content ?? children;
  const hasContent = sectionContent !== null && sectionContent !== undefined;

  return (
    <div className={clsx("mx-auto flex w-fit max-w-full flex-col gap-8 lg:w-full lg:max-w-[1200px]", className)} {...props}>
      <Title className={clsx("w-full", titleClassName)}>{title}</Title>
      {hasContent ? (
        <div className="w-full">
          <div className={clsx("w-fit max-w-full", contentClassName)}>{sectionContent}</div>
        </div>
      ) : null}
    </div>
  );
}
