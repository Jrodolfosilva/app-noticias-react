import React,{useEffect,useState} from "react"
import Styles from "./Form.module.css"
import axios from "axios"


const Form = ()=>{

    const noticiasInit = {
        id:0,
        title:"",
        autor:"",
        content:""
    }
    const [noticias,setNoticias] = useState(noticiasInit)

    const Onchanges = (e)=>{
        const {name,value} = e.target
        setNoticias({...noticias,[name]:value})
    }
    const Submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/materias",noticias).then((response)=>{
            alert('cadastrado com sucesoo')
        }).catch(()=>{
            alert('erroo')
        })
    } 
    
    return(
        <div className={Styles.container_form}>
          <h2>Cadastro</h2>
            <form>
                <input type="text" name="title" placeholder="Digite o título da notícia" onChange={Onchanges} />
                <input type="text" name="autor" placeholder="Digite o nome do Autor" onChange={Onchanges} />
                <input type="text" name="content" placeholder="Notícia" onChange={Onchanges} />
                <input type="submit" value="Publicar" onClick={Submit}/>
            </form>
        </div>
    );
}
export default Form