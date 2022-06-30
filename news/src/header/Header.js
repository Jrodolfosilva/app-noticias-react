import React from "react"
import {Link} from "react-router-dom"
import Styles from "./Header.module.css"

const Header = ()=>{
    return(
        <div className={Styles.container_header}>
            <Link to="/">News App</Link>
            <Link to="/create">Nova</Link>
        </div>
    )
}
export default Header