import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LandingPageProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  children: ReactNode;
  as?: "div" | "main";
};

export default function LandingPage({ as = "div", children, className, ...props }: LandingPageProps) {
  const Component = as;

  return (
    <Component className={clsx("relative z-10 w-full", className)} {...props}>
      {children}
    </Component>
  );
}
