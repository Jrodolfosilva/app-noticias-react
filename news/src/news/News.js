import React,{useState,useEffect} from "react"
import axios from "axios"
import CardNews from "./CardNews";
import Styles from "./News.module.css"

const News = ()=>{
    
    const [noticias,setNoticias] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:5000/materias?_sort=id&_order=desc")
        .then((resp)=>{
            setNoticias(resp.data) 
           
        })
    },[])
    
    

    return(
        <div className={Styles.container_news}>
            
            {  noticias.map((poster)=>(
                <CardNews poster={poster}/>
            ))
            }
        </div>
    );
}
export default News