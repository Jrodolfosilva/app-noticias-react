import React,{useState,useEffect} from "react"
import CardNews from "./CardNews";
import Styles from "./News.module.css"

const News = ()=>{
    const [noticias,setNoticias] = useState([]);


    return(
        <div className={Styles.container_news}>
            <CardNews poster={noticias}/>
        </div>
    );
}
export default News