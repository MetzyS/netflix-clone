import { ReactElement } from "react";

const ProfileItem = (props: {
  id?: number;
  icon: ReactElement;
  label: string;
  username: string;
  text: string;
  checkbox: boolean;
  isEmpty: boolean;
  isEmptyText: string;
}) => {
  return (
    <div className="flex items-center">
      <span className="mr-3">{props.icon}</span>
      <div
        className={`border border-neutral-400 p-3 flex justify-between items-center rounded-sm relative mb-3 w-full ${
          props.isEmpty && "bg-stone-100"
        }`}
      >
        <span
          className={`${
            props.checkbox ? "absolute top-0.5 text-xs" : "text-lg"
          } text-neutral-500`}
        >
          {props.isEmpty ? props.isEmptyText : props.label}
        </span>
        <span className="font-semibold pt-3">{props.username}</span>

        <label className="text-red-600 font-bold text-lg flex items-center select-none">
          {props.text}
          {props.checkbox ? (
            <input
              type="checkbox"
              name={props.id ? `profile-${props.id}` : ""}
              id={props.id ? `profile-${props.id}` : ""}
              className="ml-1 size-8 checkbox-kids"
            />
          ) : (
            <div className="size-8 border ml-2 rounded-sm border-stone-300"></div>
          )}
        </label>
      </div>
    </div>
  );
};

export default ProfileItem;
