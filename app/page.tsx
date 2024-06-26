import { TradeMark } from "@/components/TradeMark";
import { SubscriptionLinks } from "@/components/SubscriptionLinks";
import { UniquePaymentLinks } from "@/components/UniquePaymentLinks";
import { InternationalPaymentLinks } from "@/components/InternationalPaymentLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { BankTransferLinks } from "@/components/BankTransferLinks";

export default function Home() {
  return (
    <body>
      <main className="flex min-h-screen flex-col place-content-evenly">
        <TradeMark />
        <SocialLinks />
        <SubscriptionLinks />
        <UniquePaymentLinks />
        <div className={"lg:flex lg:items-center lg:justify-center"}>
          <div className={"lg:mx-2"}>
            <BankTransferLinks />
          </div>
          <div className={"lg:mx-2"}>
            <InternationalPaymentLinks />
          </div>
        </div>
      </main>
      <div className={"bg-left opacity-5"}></div>
      <div className={"bg-right opacity-5"}></div>
    </body>
  );
}
