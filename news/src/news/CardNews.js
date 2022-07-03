import React from "react"
import Styles from "./CardNews.module.css"


const CardNews = ({poster})=>{
    

    return(
        <div className={Styles.container_card}>
            <p>{poster.title}</p>
            <span>{poster.autor}</span>
            <p className={Styles.container_card__content}>{poster.content}</p>
        </div>
    );
}
export default CardNews