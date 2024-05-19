import { HiOutlineLockClosed } from "react-icons/hi";
import LangType from "../../../types/data";

const PaymentChoice = (props: { data: LangType }) => {
  return (
    <div>
      <HiOutlineLockClosed className="text-red-600 rounded-full border" />
    </div>
  );
};
export default PaymentChoice;
