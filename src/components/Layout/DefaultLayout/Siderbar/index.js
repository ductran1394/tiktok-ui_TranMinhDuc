import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(style);

export default function Sidebar() {
   return (
      <aside className={cx("wrapper")}>
         <h2>Sidebar</h2>
      </aside>
   );
}
