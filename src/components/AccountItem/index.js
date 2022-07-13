import React from "react";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import images from "~/assets/images/157953219_2021098151361266_2282117636854165433_n.jpg";
import Image from "../Image";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

export default function AccountItem({data}) {
   return (
      <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
         <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.full_name}
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>{data.full_name}</span>
               {data.tick && (
                  <FontAwesomeIcon
                     className={cx("check")}
                     icon={faCheckCircle}
                  />
               )}
            </h4>
            <span className={cx("username")}>{data.nickname}</span>
         </div>
      </Link>
   );
}
