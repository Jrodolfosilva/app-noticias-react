import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import Styles from "./Form.module.css"
import axios from "axios"


const Form = ()=>{

    const {id} = useParams()

   

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
        
        /*let method = "post" 
        id?id=Number.parseInt(id):id=null
        if(id) method = "put"
        */
        
        axios.post("http://localhost:5000/materias",noticias).then((response)=>{
            alert('cadastrado com sucesoo')
        }).catch(()=>{
            alert('erroo')
        })
    } 
    const Delete = ()=>{
        axios.delete(`http://localhost:5000/materias/${id}`).then((resp)=>{
            alert('Excluido com sucesso')
        })
    }
  
    return(
        <div className={Styles.container_form}>
          {id?<h2>Edição</h2>:<h2>Cadastro</h2>}
            <form>
                <input type="text" name="title" placeholder="Digite o título da notícia" onChange={Onchanges} />
                <input type="text" name="autor" placeholder="Digite o nome do Autor" onChange={Onchanges} />
                <input type="text" name="content" placeholder="Notícia" onChange={Onchanges} />
                <input type="submit" value={id?"Atualizar":"Publicar"} onClick={Submit}/>
                {id&&<button onClick={Delete}>Excluir</button>}
            </form>
        </div>
    );
}
export default Form