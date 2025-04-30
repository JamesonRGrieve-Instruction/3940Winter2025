import { ReactNode } from "react";

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}
