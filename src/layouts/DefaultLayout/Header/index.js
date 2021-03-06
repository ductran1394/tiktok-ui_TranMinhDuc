import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import avatar from "~/assets/images/157953219_2021098151361266_2282117636854165433_n.jpg";

import {InboxIcon, MessageIcon, UploadIcon} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../../Search";
import {Link} from "react-router-dom";
import config from "~/config";
// import {config} from "@fortawesome/fontawesome-svg-core";

const cx = classNames.bind(style);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
         title: "Language",
         data: [
            {
               type: "language",
               code: "en",
               title: "English",
            },
            {
               type: "language",
               code: "vi",
               title: "Tiếng Việt",
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
   },
];

export default function Header() {
   // const [searchResult, setSearchResult] = useState([]);
   // useEffect =
   //    (() => {
   //       setTimeout(() => {
   //          setSearchResult([1, 2]);
   //       }, 0);
   //    },
   //    []);

   const searchResult = [];

   // Handle logic
   const handleMenuChange = (menuItem) => {
      // switch (menuItem.type) {
      //    case "language":
      //       // Handle change language
      //       break;
      //    default:
      // }
      console.log(menuItem);
   };

   const currentUser = true;

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: "View profile",
         to: "/@hoaa",
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: "Get coins",
         to: "/coin",
         separate: true,
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: "Settings",
         to: "/settings",
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: "Log out",
         to: "/logout",
         separate: true,
      },
   ];

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <Link to={config.routes.home} className={cx("logo-link")}>
                  <img src={images.logo} alt="tiktok" />
               </Link>
            </div>

            {/* Search */}
            <Search />

            <div className={cx("actions")}>
               {currentUser ? (
                  <>
                     <Tippy
                        delay={[0, 200]}
                        content="Upload video"
                        placement="bottom">
                        <button className={cx("action-btn")}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy
                        delay={[0, 50]}
                        content="Message"
                        placement="bottom">
                        <button className={cx("action-btn")}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                        <button className={cx("action-btn")}>
                           <InboxIcon />
                           <span className={cx("badge")}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu
                  items={currentUser ? userMenu : MENU_ITEMS}
                  onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx("user-avatar")}
                        src={avatar}
                        alt="Nguyen Van A"
                     />
                  ) : (
                     <button className={cx("more-btn")}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}
