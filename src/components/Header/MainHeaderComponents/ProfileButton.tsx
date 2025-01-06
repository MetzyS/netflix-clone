import { GoTriangleDown } from "react-icons/go";
import { HeaderProfileMenu } from "../../../types/data";

const ProfileButton = (props:{
    showMenu: (value:boolean) => void;
    handleDisconnect: () => void;
    userProfileIcon: string;
    username: string;
    content: HeaderProfileMenu
    disconnectString: string;
}) => {

    return (<div>
        <div
            className="flex flex-col relative py-3 px-8 lg:py-0 lg:px-0 shrink-0"
            onMouseEnter={() => props.showMenu(true)}
        >
            <button className="flex items-center gap-4 lg:gap-1">
                <img
                    src={props.userProfileIcon}
                    className="w-8"
                />
                <span className="lg:hidden">{props.username}</span>
                <span className="hidden lg:block items-center justify-center size-4"><GoTriangleDown className="size-full"/></span>
            </button>
        </div>
        <div className="lg:hidden">
            <ul className="flex flex-col border-b border-b-white/20 pb-2">
                {props.content.map((item, index) => (
                    <li className="flex" key={`profileMenuItem-${index}`}>
                        <a href={`${item.link}`} className="default-navlink">
                            {item.name}
                        </a>
                    </li>
                ))}
                <li className="flex">
                    <button
                        type="button"
                        className="default-navlink"
                        onClick={props.handleDisconnect}
                    >
                        {props.disconnectString}
                    </button>
                </li>
            </ul>
        </div>
    </div>)
}

export default ProfileButton;