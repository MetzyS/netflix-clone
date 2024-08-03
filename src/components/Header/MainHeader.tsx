import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../types/data";
import Logo from "../ui/Logo";
import { UserType } from "../../types/user";
import { FiHelpCircle, FiBell } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";

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
    handleHideEveryMenus();
    setShowNavMenu(!showNavMenu);
  };

  const handleShowNotificationsMenu = (value = !showNotificationMenu) => {
    if (value) {
      handleHideEveryMenus()
    }
    setShowNotificationMenu(value);
  };

  const handleShowProfileMenu = (value = !showProfileMenu) => {
    if (value) {
      handleHideEveryMenus();
    }
    setShowProfileMenu(value);
  }

  const handleHideEveryMenus = () => {
    setShowProfileMenu(false);
    setShowNotificationMenu(false);
  }

  const [searchIsVisible, setSearchIsVisible] = useState(false);

  const handleToggleSearch = () => {
    setSearchIsVisible(!searchIsVisible);
  };

  return (
    <>
      {props.isLoading ? (
        <div>loading</div>
      ) : (
        <header
          className={`fixed py-6 px-4 lg:px-14 w-full flex gap-4 items-center justify-between transition-colors bg-neutral-900 z-20 md:text-xs ${transparentMenu
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
              className={`${showNavMenu ? "flex flex-col lg:flex-row" : "hidden"
                } fixed bg-neutral-900 w-max left-0 top-20 transition-colors duration-700 h-full lg:relative lg:flex lg:bg-transparent lg:w-full lg:justify-between lg:-left-0 lg:top-0 lg:mt-0 lg:items-center
              `}
            >
              <ul className="flex flex-col lg:flex-row lg:gap-0 order-2 lg:order-1 pt-2 lg:pt-0 lg:min-w-fit">
                {props.content.mainHeader.browseList.map((item, index) => (
                  <li className="flex lg:block" key={`navItem-${index}`}>
                    <Link
                      to={item.link}
                      key={`navlink-${index}`}
                      className="text-sm xl:text-lg py-2 px-8 lg:px-2 xl:px-4 transition-color hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-neutral-400 w-full"
                      onClick={() => setShowNavMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* settings desktop */}
              <div className={`flex-col flex lg:flex lg:flex-row lg:gap-3 order-1 lg:order-2 items-start lg:items-center lg:justify-end w-fit lg:h-full`}>
                {/* Searchbar Desktop */}
                <div className={`w-fit lg:h-full px-0.5 flex items-center border transition-all ${searchIsVisible ? "border-neutral-400 bg-neutral-900" : "border-transparent bg-transparent"}`}
                  onMouseEnter={handleHideEveryMenus}
                >
                  <button
                    className={`hidden lg:flex items-center size-7 shrink-0`}
                    onClick={handleToggleSearch}
                  >
                    <IoMdSearch className="size-full" />
                  </button>

                  <label htmlFor="searchInput"
                    className={`w-auto h-6 transition-all duration-700 ${searchIsVisible ? "lg:flex lg:max-w-[500px]" : "max-w-0"}`}
                    onBlur={handleToggleSearch}
                  >

                    <input type="text" className={`size-full font-normal transition-all duration-500 bg-transparent px-1 outline-none ${searchIsVisible ? "text-neutral-200" : "text-transparent"}`} placeholder={props.content.mainHeader.searchPlaceholder} />
                  </label>
                </div>

                {/* Notif btn */}
                <div className="hidden lg:flex items-center relative shrink-0" onMouseEnter={() => handleShowNotificationsMenu(true)}>
                  <button onClick={() => handleShowNotificationsMenu}>
                    <FiBell className="size-6" />
                  </button>
                  <div
                    className={`${showNotificationMenu ? "block" : "hidden"
                      } absolute bg-black/85 w-max -right-4 top-14 lg:-mt-2 border-t-2 
              `}

                    onMouseLeave={() => handleShowNotificationsMenu(false)}
                  >
                    <p className="px-6 py-4">
                      {props.content.mainHeader.notificationMenu[1].text[0]}
                    </p>
                  </div>
                </div>
                {/* Profile btn */}
                <div className="flex flex-col relative py-3 px-8 lg:py-0 lg:px-0 shrink-0"
                  onMouseEnter={() => handleShowProfileMenu(true)}
                >
                  <button className="flex items-center gap-4">
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
          <div className="w-full bg-black/20 lg:hidden flex shrink border border-white/15 backdrop-blur-md min-w-[80px] max-w-[45%]">
            <IoMdSearch className="size-7" />
            <input
              type="text"
              name="search"
              className="p-1 bg-transparent text-sm w-full"
              placeholder={`${props.content.mainHeader.searchPlaceholder}`}
            />
          </div>
        </header >
      )}
    </>
  );
};

export default MainHeader;
