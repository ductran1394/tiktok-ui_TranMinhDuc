import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(style);

export default function Header() {
   // const [searchResult, setSearchResult] = useState([]);
   // useEffect =
   //    (() => {
   //       setTimeout(() => {
   //          setSearchResult([1, 2]);
   //       }, 0);
   //    },
   //    []);

   const searchResult = [1, 2];

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <img src={images.logo} alt="tiktok" />
            </div>
            <Tippy
               visible={searchResult.length > 0}
               interactive
               render={(attrs) => (
                  <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}>
               <div className={cx("search")}>
                  <input placeholder="Search accounts and videos" />
                  <button className={cx("clear")}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                  <button className={cx("search-btn")}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx("action")}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>
            </div>
         </div>
      </header>
   );
}
