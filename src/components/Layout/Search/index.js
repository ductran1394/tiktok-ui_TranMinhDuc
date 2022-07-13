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

import {useDebounce} from "~/hooks";
import axios from "axios";
import * as request from "~/utils/request";
import * as searchServices from "~/services/searchServices";

const cx = classNames.bind(style);

export default function Search() {
   const [searchValue, setSearchValue] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debounced);
         setSearchResult(result);
         setLoading(false);
      };

      fetchApi();
   }, [debounced]);

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
                  {searchResult.map((result) => (
                     <AccountItem key={result.id} data={result} />
                  ))}
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
            {!!searchValue && !loading && (
               <button className={cx("clear")} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && (
               <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            )}

            <button className={cx("search-btn")}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}
