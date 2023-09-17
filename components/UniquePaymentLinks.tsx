import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { PaymentLink, UNIQUE_PAYMENTS } from "@/config/payment-links";

export function UniquePaymentLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-xl lg:text-3xl"}>Hacé un aporte único</p>
      <div
        className={
          "my-4 mb-12 grid w-full grid-cols-2 justify-center lg:mb-4 lg:flex lg:grid-cols-none lg:flex-row"
        }
      >
        {UNIQUE_PAYMENTS.map((uniquePayment) => (
          <div className={"m-2 lg:my-0 lg:w-36"} key={uniquePayment.link}>
            <PaymentLink link={uniquePayment.link} name={uniquePayment.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentLink({ name, link }: PaymentLink) {
  return (
    <a
      href={link}
      className="inline-flex w-full items-center justify-center rounded-lg bg-violet-700 p-3 font-zuume text-xl text-violet-100 shadow-sm ring-1 ring-inset ring-violet-950 first:mt-0 last:mb-0 hover:bg-violet-700"
    >
      <CurrencyDollarIcon
        className="-ml-1 mr-1 h-8 w-8 text-violet-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
