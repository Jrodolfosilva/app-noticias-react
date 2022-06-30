import React from "react"
import CardNews from "./CardNews";
import Styles from "./News.module.css"

const News = ()=>{
    return(
        <div className={Styles.container_news}>
            <CardNews/>
        </div>
    );
}
export default News