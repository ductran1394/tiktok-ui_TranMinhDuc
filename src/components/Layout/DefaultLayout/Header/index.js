import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import images from "~/assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

export default function Header() {
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <img src={images.logo} alt="tiktok" />
            </div>
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
            <div className={cx("action")}></div>
         </div>
      </header>
   );
}
