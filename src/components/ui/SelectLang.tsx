import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const SelectLang = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <div className="justify-center items-center  rounded-md transition-none ring-default">
        <div className="flex justify-center items-center gap-2 rounded-md text-white border-white/50 border-2 relative">
          <div className="absolute left-4">
            <IoLanguage className="size-4" />
          </div>
          <select
            name="lang"
            id="lang"
            className="border-none py-2 bg-neutral-900/50 backdrop:blur-md outline-none appearance-none w-0 px-10 z-10 font-semibold sm:w-full"
            onChange={(e) => {
              props.handleChangeLang(e.currentTarget.value);
            }}
          >
            <option value="1" className="select-default">
              Français
            </option>
            <option value="2" className="select-default">
              English
            </option>
          </select>
          <div className="absolute right-4 top-3">
            <IoMdArrowDropdown className="size-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectLang;
