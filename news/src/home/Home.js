import React from "react"
import Styles from "./Home.module.css"
import News from "../news/News"
const Home = ()=>{
    return (
        <div className={Styles.container_home}>
            Aqui ficará a pagina Home
            <News/>
        </div>
    );
}
export default Home