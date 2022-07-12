import React from "react";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import images from "~/assets/images/157953219_2021098151361266_2282117636854165433_n.jpg";
import Image from "../Image";

const cx = classNames.bind(styles);

export default function AccountItem() {
   return (
      <div className={cx("wrapper")}>
         <Image className={cx("avatar")} src={images} alt="Hoaa" />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </h4>
            <span className={cx("username")}>nguyenvana</span>
         </div>
      </div>
   );
}
