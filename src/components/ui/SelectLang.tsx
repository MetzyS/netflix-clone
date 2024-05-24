import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const SelectLang = (props: {
  showText?: boolean;
  bg?: string;
  selectTextColor?: string;
  borderColor?: string;
  lang: string;
  handleChangeLang: (lang: string) => void;
}) => {
  // const { lang, handleChangeLang } = useDataContext();
  return (
    <>
      <div className="justify-center items-center rounded-md transition-none ring-default">
        <div
          className={`flex justify-center items-center gap-2 rounded-md ${
            props.selectTextColor ? props.selectTextColor : " text-white "
          } ${props.bg ? props.bg : " bg-zinc-950/35 "} border ${
            props.borderColor ? props.borderColor : "border-white/30"
          } relative backdrop-blur-md`}
        >
          <div className="absolute left-2.5">
            <IoLanguage className="size-4 text-white" />
          </div>
          <select
            name="lang"
            id="lang"
            className={`border-none py-1.5 backdrop:blur-md outline-none appearance-none w-0 ${
              props.showText ? "w-full" : ""
            } px-8 z-10 font-semibold sm:w-full bg-transparent`}
            value={props.lang}
            onChange={(e) => {
              props.handleChangeLang(e.target.value);
            }}
          >
            <option value="fr" className="select-default">
              Français
            </option>
            <option value="en" className="select-default">
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
