import React from "react"
import Styles from "./Home.module.css"
import News from "../news/News"
const Home = ()=>{
    return (
        <div className={Styles.container_home}>
            <News/>
        </div>
    );
}
export default Home