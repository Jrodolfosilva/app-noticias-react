import React,{useState,useEffect} from "react"
import axios from "axios"
import CardNews from "./CardNews";
import Styles from "./News.module.css"


const News = ()=>{
    
    const [noticias,setNoticias] = useState([]);
    const [buscar,setBuscar] = useState('')
    
    useEffect(()=>{

    const params = {}
    if(buscar){
        params.title_like = buscar
    }
        axios.get("http://localhost:5000/materias?_sort=id&_order=desc",{params})
        .then((resp)=>{
            setNoticias(resp.data)         
        })
    },[buscar])
   
    
console.log(noticias)
    return(
        <div className={Styles.container_news}>
            <input type="text" value={buscar}  placeholder="Digite sua busca" onChange={(e)=>setBuscar(e.target.value)}/>

            {  noticias.map((poster)=>(
                <CardNews key={poster.id} poster={poster}/>
            ))
            }
            {noticias.length?"":
            <div className={Styles.container_news__diverro}>
            <p className={Styles.container_news__msgerro}>Nenhum resultado foi encontrado!</p>            
            </div>
            }
        </div>
    );
}
export default News