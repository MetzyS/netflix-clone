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
          className={`fixed py-6 px-4 w-full flex gap-4 items-center justify-between transition-colors duration-700 bg-neutral-900 z-20 ${
            transparentMenu ? "bg-opacity-0" : "bg-opacity-100"
          }`}
        >
          {/* logo */}
          <Link to="/">
            <Logo className="w-28" />
          </Link>

          {/* menu */}
          <nav className="flex items-center flex-grow relative font-semibold">
            <button className="block lg:hidden" onClick={handleShowNavMenu}>
              {props.content.mainHeader.browseBtn}
            </button>
            <ul
              className={`${
                showNavMenu ? "flex" : "hidden lg:flex"
              } absolute flex-col border-t-2 bg-black/85 lg:bg-transparent w-max -left-20 top-12 lg:relative lg:flex-row lg:-left-0 lg:top-0 lg:mt-0 lg:border-none  transition-colors duration-700
              `}
            >
              {props.content.mainHeader.browseList.map((item, index) => (
                <Link
                  to={item.link}
                  key={`navlink-${index}`}
                  className="text-sm py-3 px-8 lg:px-3 text-center transition-all hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-neutral-400"
                  onClick={() => setShowNavMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>

          {/* settings */}
          <div className="flex gap-3 lg:mr-6">
            <button className="hidden lg:block">search</button>
            {/* Notif btn */}
            <div className="flex items-center relative">
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
            <div className="flex items-center relative">
              <button onClick={handleShowProfileMenu}>
                <img
                  src={props.userProfileIcons[props.selectedProfile!]}
                  className="w-8"
                />
              </button>
              <div
                className={`${
                  showProfileMenu ? "block" : "hidden"
                } absolute bg-black/85 w-max -right-4 top-14 lg:-mt-2 border-t-2 
              `}
              >
                <ul className="flex flex-col font-semibold border-b border-neutral-600">
                  {props.user.profiles.map((item, index) => (
                    <li className="text-sm" key={`profileBtn-${index}`}>
                      <button className="flex gap-2 px-2 py-3 items-end group/profile">
                        <img
                          src={props.userProfileIcons[item.id]}
                          alt="user profile icon"
                          className="w-6"
                        />
                        <span className="group-hover/profile:underline">
                          {item.username}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="text-sm font-semibold">
                  {props.content.mainHeader.profileMenu.map((item, index) => (
                    <li
                      key={`profileMenu-${index}`}
                      className="group/profilelink flex px-2 py-3 items-center gap-2 cursor-pointer last:border-t last:border-neutral-600"
                    >
                      {profileLinkIcons[index]}
                      <Link
                        to={item.link}
                        className="flex gap-2 items-end group-hover/profilelink:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default MainHeader;
