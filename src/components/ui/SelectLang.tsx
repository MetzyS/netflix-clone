import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const SelectLang = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <div className="justify-center items-center rounded-md transition-none ring-default">
        <div className="flex justify-center items-center gap-2 rounded-md text-white border-white/30 border relative bg-zinc-950/35 backdrop-blur-md">
          <div className="absolute left-2.5">
            <IoLanguage className="size-4 text-white" />
          </div>
          <select
            name="lang"
            id="lang"
            className="border-none py-1.5 backdrop:blur-md outline-none appearance-none w-0 px-8 z-10 font-semibold sm:w-full bg-transparent"
            onChange={(e) => {
              props.handleChangeLang(e.target.value);
            }}
          >
            <option value="1" className="select-default">
              Français
            </option>
            <option value="2" className="select-default">
              English
            </option>
          </select>
          <div className="absolute right-3">
            <IoMdArrowDropdown className="size-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectLang;
