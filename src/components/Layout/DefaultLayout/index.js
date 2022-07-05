import Header from "./Header";
import Sidebar from "./Siderbar";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(style);

export default function DefaultLayout({children}) {
   return (
      <div className={cx("wrapper")}>
         <Header />
         <div className={cx("container")}>
            <Sidebar />
            <div className={cx("content")}>{children}</div>
         </div>
      </div>
   );
}
