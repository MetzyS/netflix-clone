import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../types/data";
import Logo from "../ui/Logo";
import { UserType } from "../../types/user";
import { BiPencil } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle, FiBell } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const MainHeader = (props: {
  content: Header;
  lang: string;
  isLoading: boolean;
  selectedProfile: undefined | number;
  user: UserType;
  userProfileIcons: string[];
  handleDisconnect: () => void;
  handleChangeLang: (lang: string) => void;
}) => {
  useEffect(() => {
    window.addEventListener("scroll", handleTransparentMenu);
  });
  const [transparentMenu, setTransparentMenu] = useState(true);

  const handleTransparentMenu = () => {
    let currentScroll = window.scrollY;
    if (currentScroll > 5) {
      setTransparentMenu(false);
    } else {
      setTransparentMenu(true);
    }
  };

  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [showNotificationMenu, setShowNotificationMenu] =
    useState<boolean>(false);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
    setShowProfileMenu(false);
    setShowNotificationMenu(false);
  };

  const handleShowProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNavMenu(false);
    setShowNotificationMenu(false);
  };

  const handleShowNotificationsMenu = () => {
    setShowNotificationMenu(!showNotificationMenu);
    setShowNavMenu(false);
    setShowProfileMenu(false);
  };

  const profileLinkIcons: JSX.Element[] = [
    <BiPencil className="size-6" />,
    <IoShareSocialOutline className="size-6" />,
    <AiOutlineUser className="size-6" />,
    <FiHelpCircle className="size-6" />,
    <RiLogoutBoxLine className="size-6" />,
  ];

  return (
    <>
      {props.isLoading ? (
        <div>loading</div>
      ) : (
        <header
          className={`fixed py-6 px-4 lg:px-14 w-full flex gap-4 items-center justify-between transition-colors bg-neutral-900 z-20 ${
            transparentMenu
              ? showNavMenu
                ? "bg-neutral-900 lg:bg-opacity-0 duration-0"
                : "bg-opacity-0 duration-200"
              : "bg-opacity-100 duration-700"
          }`}
        >
          {/* Mobile nav btn */}
          <button
            type="button"
            className="lg:hidden flex ites-center"
            onClick={handleShowNavMenu}
          >
            <RxHamburgerMenu className="size-6 mr-4" />
          </button>
          {/* logo */}
          <Link to="/">
            <Logo className="w-28" />
          </Link>

          {/* menu */}
          <nav className="flex items-center flex-grow relative font-semibold">
            <div
              className={`${
                showNavMenu ? "flex flex-col lg:flex-row" : "hidden"
              } fixed bg-neutral-900 w-max left-0 top-20 transition-colors duration-700 h-full lg:relative lg:flex lg:bg-transparent lg:w-full lg:justify-between lg:-left-0 lg:top-0 lg:mt-0 lg:items-center
              `}
            >
              <ul className="flex flex-col lg:flex-row lg:gap-0 order-2 lg:order-1 pt-2 lg:pt-0">
                {props.content.mainHeader.browseList.map((item, index) => (
                  <li className="flex lg:block" key={`navItem-${index}`}>
                    <Link
                      to={item.link}
                      key={`navlink-${index}`}
                      className="text-sm py-2 px-8 lg:px-3 transition-color hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-neutral-400 w-full"
                      onClick={() => setShowNavMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* settings desktop */}
              <div className="lg:mr-6 lg:flex lg:gap-3 order-1 lg:order-2">
                <button className="hidden lg:block">search</button>
                {/* Notif btn */}
                <div className="hidden lg:flex items-center relative">
                  <button onClick={handleShowNotificationsMenu}>
                    <FiBell className="size-6" />
                  </button>
                  <div
                    className={`${
                      showNotificationMenu ? "block" : "hidden"
                    } absolute bg-black/85 w-max -right-4 top-14 lg:-mt-2 border-t-2 
              `}
                  >
                    <p className="px-6 py-4">
                      {props.content.mainHeader.notificationMenu[1].text[0]}
                    </p>
                  </div>
                </div>
                {/* Profile btn */}
                <div className="flex flex-col relative py-3 px-8 lg:py-0 lg:px-0">
                  <button
                    // onClick={handleShowProfileMenu}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={props.userProfileIcons[props.selectedProfile!]}
                      className="w-8"
                    />
                    <span className="lg:hidden">{props.user.username}</span>
                  </button>
                </div>
                <div className="lg:hidden">
                  <ul className="flex flex-col border-b border-b-white/20 pb-2">
                    {props.content.mainHeader.profileMenu.map((item, index) => (
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
                        {props.content.disconnect}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/* input search mobile */}
          <input
            type="text"
            name="search"
            className="bg-black/20 p-1 text-sm lg:hidden border border-white/15 backdrop-blur-md w-full xs:w-auto"
            placeholder={`${props.content.mainHeader.searchPlaceholder}`}
          />
        </header>
      )}
    </>
  );
};

export default MainHeader;
