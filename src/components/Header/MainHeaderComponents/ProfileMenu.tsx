import { HeaderProfileMenu } from "../../../types/data";
import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";
import { GrLogout } from "react-icons/gr";

const ProfileMenu = (props:{
    handleShowMenu: (value:boolean) => void;
    content: HeaderProfileMenu;
    handleDisconnect: () => void;
    disconnectString: string;
    showMenu: boolean;
}) => {
    const iconSize = "lg:ml-2 size-6"
    const icons = [<BsPencil className={iconSize}/>, <TbSwitch2 className={iconSize}/>, <BsPerson className={iconSize}/>, <BsQuestionCircle className={iconSize}/>, <GrLogout className={iconSize}/>]
    return (<div className={`${props.showMenu ? "lg:block" : "lg:hidden"} lg:-mt-1 lg:absolute lg:w-max lg:top-14 lg:right-0 lg:bg-black/85 lg:border-t-2`}
        onMouseLeave={() => props.handleShowMenu(false)}>
            <ul className="flex flex-col border-b border-b-white/20 lg:border-b-0 pb-2 lg:pt-2">
                {props.content.map((item, index) => (
                    <li className="flex" key={`profileMenuItem-${index}`}>
                        {/* <span>test</span> */}
                        <span className="hidden lg:flex lg:items-center">{icons[index]}</span>
                        <a href={`${item.link}`} className="default-navlink">
                        
                            {item.name}
                        </a>
                    </li>
                ))}
                <li className="flex">
                    <span className="hidden lg:flex lg:items-center">{icons[4]}</span>
                    <button
                        type="button"
                        className="default-navlink"
                        onClick={props.handleDisconnect}
                    >
                        {props.disconnectString}
                    </button>
                </li>
            </ul>
        </div>)
}

export default ProfileMenu;