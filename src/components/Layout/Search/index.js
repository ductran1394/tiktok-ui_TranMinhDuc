import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";
import style from "./Search.module.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(style);

export default function Search() {
   const [searchValue, setSearchValue] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);

   const inputRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 0);
   }, []);

   const handleClear = () => {
      setSearchValue("");
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadlessTippy
         visible={showResult && searchResult.length > 0}
         interactive
         onClickOutside={handleHideResult}
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
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search accounts and videos"
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            {!!searchValue && (
               <button className={cx("clear")} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

            <button className={cx("search-btn")}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}
