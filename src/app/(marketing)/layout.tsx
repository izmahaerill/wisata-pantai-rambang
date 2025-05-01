import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}
