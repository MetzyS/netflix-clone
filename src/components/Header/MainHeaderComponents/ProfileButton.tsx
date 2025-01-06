import { GoTriangleDown } from "react-icons/go";
import { HeaderProfileMenu } from "../../../types/data";
import ProfileMenu from "./ProfileMenu";

const ProfileButton = (props:{
    handleShowMenu: (value:boolean) => void;
    showMenu: boolean;
    handleDisconnect: () => void;
    userProfileIcon: string;
    username: string;
    content: HeaderProfileMenu
    disconnectString: string;
}) => {

    return (<div className="relative"
        onMouseEnter={() => props.handleShowMenu(true)}
        >
        <div
            className="flex flex-col relative py-3 px-8 lg:py-0 lg:px-0 shrink-0"
            // onMouseEnter={() => props.showMenu(true)}
            
        >
            <button className="flex items-center gap-4 lg:gap-1">
                <img
                    src={props.userProfileIcon}
                    className="w-8"
                />
                <span className="lg:hidden">{props.username}</span>
                <span className="hidden lg:block items-center justify-center size-4 duration-200 group-hover:rotate-180"><GoTriangleDown className="size-full"/></span>
            </button>
        </div>
        <ProfileMenu content={props.content} disconnectString={props.disconnectString} handleDisconnect={props.handleDisconnect} handleShowMenu={props.handleShowMenu} showMenu={props.showMenu} />
    </div>)
}

export default ProfileButton;