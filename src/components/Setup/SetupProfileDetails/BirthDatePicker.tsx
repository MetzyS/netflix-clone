import {
  ChangeEvent,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Form } from "react-router-dom";
import DefaultButton from "../../ui/DefaultButton";

const BirthDatePicker = (props: {
  inputText: string[];
  label: string;
  gender: string;
  months: string[];
  select: string;
  genderList: string[];
  btn: string;
}) => {
  const year = Number(new Date().getFullYear());
  const years: number[] = Array.from(new Array(99), (_, index) => year - index);
  const [days, setDays] = useState<ReactElement[]>([]);
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<number>(2);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [gender, setGender] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeDay = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.currentTarget.value);
    if (selected < 1 || selected > 31) {
      setDay(1);
    } else {
      setDay(selected);
    }
  };

  const handleChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.currentTarget.value);
    if (selected < 1 || selected > 12) {
      setMonth(1);
    } else {
      setMonth(selected);
    }
  };

  const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.currentTarget.value);
    const date = new Date();
    const thisYear = date.getFullYear();
    if (selected < 1900 || selected > Number(thisYear)) {
      setSelectedYear(Number(thisYear));
    } else {
      setSelectedYear(selected);
    }
  };

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(Number(e.currentTarget.value));
  };

  const handleSaveBirthDate = () => {
    const birthDate = `${day}/${month}/${year}`;
  };

  useEffect(() => {
    // Ré-initialisation jour
    setDay(1);
    // Calcul nombre de jours dans le mois
    const nbOfDaysInMonth = (month: number, year: number) => {
      year = selectedYear;
      if (month === 2) {
        // Conditions années bissextiles
        if (year % 400 === 0) return 29;
        if (year % 100 === 0) return 28;
        if (year % 4 === 0) return 29;
        return 28;
      }
      if ([4, 6, 9, 11].includes(month)) {
        return 30;
      }
      return 31;
    };
    const nbDays = nbOfDaysInMonth(month, year);
    setDays([]);

    for (let i = 1; i < nbDays + 1; i++) {
      setDays((prevState) => [
        ...prevState,
        <option value={i} className="text-black">
          {i}
        </option>,
      ]);
    }
  }, [month, selectedYear]);

  return (
    <Form className="lg:mt-11 w-full">
      <div className="my-6">
        <h2 className="font-semibold mt-12 lg:mt-0 mb-1 text-lg">
          {props.label}
        </h2>
        <div className="flex flex-col w-full gap-3">
          <div className="select-date-wrapper max-w-[400px]">
            <select
              name="day"
              id="day"
              onChange={(e) => handleChangeDay(e)}
              className="text-lg select-date invalid:text-neutral-500"
              defaultValue={""}
              required
            >
              <option value="" disabled hidden>
                {props.inputText[0]}
              </option>
              {days.map((item, index) => (
                <Fragment key={`day-${index + 1}`}>{item}</Fragment>
              ))}
            </select>
          </div>

          <div className="select-date-wrapper max-w-[400px]">
            <select
              name="month"
              id="month"
              onChange={(e) => handleChangeMonth(e)}
              className="text-lg select-date invalid:text-neutral-500"
              defaultValue={""}
              required
            >
              <option value={""} disabled hidden>
                {props.inputText[1]}
              </option>
              {props.months.map((_, index) => (
                <option
                  value={index + 1}
                  key={`month-${index}`}
                  className="text-black"
                >
                  {props.months[index]}
                </option>
              ))}
            </select>
          </div>

          <div className="select-date-wrapper max-w-[400px]">
            <select
              name="year"
              id="year"
              onChange={(e) => handleChangeYear(e)}
              className="text-lg select-date invalid:text-neutral-500"
              defaultValue={""}
              required
            >
              <option value="" disabled hidden>
                {props.inputText[2]}
              </option>
              {years.map((item) => (
                <option
                  value={item}
                  key={`year-${item}`}
                  className="text-black"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h3 className="font-semibold mt-12 mb-1 text-lg">{props.gender}</h3>
        {/* Sexe */}
        <div className="select-date-wrapper max-w-[400px]">
          <select
            name="gender"
            id="gender"
            onChange={(e) => handleChangeGender(e)}
            className="text-lg select-date invalid:text-neutral-500"
            defaultValue={""}
            required
          >
            <option value="" disabled hidden>
              {props.select}
            </option>
            {props.genderList.map((item, index) => (
              <option
                value={index}
                key={`gender-${item}`}
                className="text-black"
              >
                {item}
              </option>
            ))}
          </select>
        </div>
        <DefaultButton
          className="w-full p-4 mt-20 rounded-sm disabled:bg-stone-300 disabled:text-stone-400 max-w-[350px] self-end"
          text={props.btn}
          disabled={isDisabled}
        />
      </div>
    </Form>
  );
};

export default BirthDatePicker;
