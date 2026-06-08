import { Navbar }     from "@/components/Navbar";
import { Footer }     from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      {/* ChatWidget renders on ALL marketing pages — fixed bottom-right */}
      <ChatWidget />
    </>
  );
}
