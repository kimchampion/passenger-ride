import { createElement, type ComponentPropsWithoutRef, type ReactNode } from "react";

type MotionProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T> & {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
};

function createMotionElement<T extends keyof JSX.IntrinsicElements>(Tag: T) {
  return function MotionElement({ children, ...props }: MotionProps<T> & { children?: ReactNode }) {
    return createElement(Tag, props as ComponentPropsWithoutRef<T>, children);
  };
}

export const motion = {
  div: createMotionElement("div"),
  section: createMotionElement("section"),
};

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
