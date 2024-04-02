import { type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function SectionArea({ children, className, ...props }: Props) {
  return (
    <div {...props} className={`h-dvh overflow-scroll snap-start ${className}`}>
      {children}
    </div>
  );
}
