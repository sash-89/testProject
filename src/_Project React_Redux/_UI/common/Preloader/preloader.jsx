import React from "react";
import style from "./preloader.module.css";
import preloader from "./preload.gif";


let Preloader=()=><><img className={style.Preloader} src={preloader} alt="loading..." /></>;

export default Preloader;