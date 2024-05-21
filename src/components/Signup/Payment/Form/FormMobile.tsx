import { Form } from "react-router-dom";
import PlanPicker from "./PlanPicker";

const FormMobile = (props: { handleChangePlan: () => void }) => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
  return (
    <Form>
      <div></div>
      <PlanPicker onClick={props.handleChangePlan} />
    </Form>
  );
};
export default FormMobile;
