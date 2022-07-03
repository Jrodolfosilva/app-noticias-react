import React,{useEffect,useState} from "react"
import {useParams,useNavigate} from "react-router-dom"
import Styles from "./Form.module.css"
import axios from "axios"


const Form = ()=>{
    const navigate = useNavigate()
    let {id} = useParams()
    const noticiasInit = {
            id:0,
            title:"",
            autor:"",
            content:""
        }
    const [noticias,setNoticias] = useState(noticiasInit)
    

   useEffect(()=>{
        if(id)
            {
            axios.get(`http://localhost:5000/materias/${id}`).then((resp)=>{ setNoticias(resp.data)})
            }
   },[id])
//caso não venha id 
    const Onchanges = (e)=>{
        const {name,value} = e.target
        setNoticias({...noticias,[name]:value})
    }

    const Submit = (e)=>{
        e.preventDefault()
        
        let method = id?"put":"post"
        let url = id?`http://localhost:5000/materias/${id}`:         "http://localhost:5000/materias"

        axios[method](url,noticias)
        .then((resp)=>{
            alert(`${id?"Atualizado":"Cadastrado"}`)
            navigate("/")
        })
        .catch(()=>{
            alert('erro no cadastro ou atualizae')
        })
    } 

    const Delete = ()=>{
       
        axios.delete(`http://localhost:5000/materias/${id}`)
        .then((resp)=>{  
            alert("Excluido")
        })
        .catch(()=>alert("Erro na excluir"))
    }
  
    return(
        <div className={Styles.container_form}>
            {id?<h2>Edição</h2>:<h2>Cadastro</h2>}
            <form>
                <input type="text" name="title" placeholder="Digite o título da notícia" onChange={Onchanges} value={noticias.title} />
                <input type="text" name="autor" placeholder="Digite o nome do Autor" onChange={Onchanges}  value={noticias.autor}  />
                <input type="text" name="content" placeholder="Notícia" onChange={Onchanges}   value={noticias.content} />
                <input type="submit" value={id?"Atualizar":"Publicar"} onClick={Submit} />
                {id&&<button onClick={Delete}>Excluir</button>}
            </form>
        </div>
    );
}
export default Form