import { type PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="h-dvh overflow-scroll snap-mandatory snap-y">
      {children}
    </div>
  );
}
