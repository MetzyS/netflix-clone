import { useDataContext } from "../../../../layouts/RootLayout";

const PlanPicker = (props: { onClick: () => void }) => {
  const { user, plans } = useDataContext();
  const planDesc = plans[user!.plan];
  return (
    <div className="bg-neutral-100 flex items-center justify-between p-4 rounded-lg mt-3">
      <div className="flex flex-col">
        <span className="font-semibold">
          {planDesc.price}
          {planDesc.occurence}
        </span>
        <span className="text-neutral-500">{planDesc.title}</span>
      </div>
      <div>
        <button
          type="button"
          className="text-blue-600 font-semibold hover:underline"
          onClick={props.onClick}
        >
          Changer
        </button>
      </div>
    </div>
  );
};
export default PlanPicker;
