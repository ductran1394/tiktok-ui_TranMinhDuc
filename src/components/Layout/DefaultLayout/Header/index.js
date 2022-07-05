import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

export default function Header() {
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            {/* Logo */}
            {/* Search */}
         </div>
      </header>
   );
}
