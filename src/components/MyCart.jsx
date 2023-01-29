import { PaypalModal } from "./PaypalModal";

const amount = "5";

export const MyCart = () => {
  return (
    <>
      <PaypalModal amount={amount} />
    </>
  );
};
