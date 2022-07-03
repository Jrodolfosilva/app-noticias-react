import React from "react"
import {Link} from "react-router-dom"
import Styles from "./CardNews.module.css"
import settings from "../settings.svg"


const CardNews = ({poster})=>{
    

    return(
        <div className={Styles.container_card}>
            <p>{poster.title}</p>
            <span>{poster.autor}</span>
            <p className={Styles.container_card__content}>{poster.content}</p>
            <Link to={`/create/${poster.id}`}>
            <img src={settings}/>
            </Link>
        </div>
    );
}
export default CardNews