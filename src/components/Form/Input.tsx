const Input = (props: {
  handleInputFocus: () => void;
  label: string;
  isFocus: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmpty: boolean;
}) => {
  return (
    <div className="relative flex flex-col border border-neutral-500 rounded-md bg-blue-300/15 px-4 py-1  sm:w-full justify-center ring-default group/input">
      {props.isEmpty ? (
        <label
          htmlFor="register-email"
          className={`absolute pointer-events-none text-start text-gray-400 ${
            props.isFocus ? "top-0 text-xs" : "top-2.5 text-base"
          } `}
        >
          {props.label}
        </label>
      ) : (
        <label
          htmlFor="register-email"
          className={`absolute pointer-events-none text-start text-gray-400 top-0 text-xs`}
        >
          {props.label}
        </label>
      )}

      <input
        type="email"
        name="email"
        autoComplete="email"
        required
        className="pt-4 bg-transparent border-none outline-none"
        onFocus={props.handleInputFocus}
        onBlur={props.handleInputFocus}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
