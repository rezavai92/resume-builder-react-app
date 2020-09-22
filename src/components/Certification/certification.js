import React,{useState,useEffect,useContext}  from 'react'
import './certification.css'
import HomeNav from '../HomeNav/homenav'
import {PageContext} from '../contexts/pagecontext'
import {Button} from 'react-bootstrap'
const Certification = (props)=>{

    const [title,setTitle] =useState("");
    const [institute,setInstitute] = useState("");
    const [link,setLink] = useState("");
    const { addPageFour} = useContext(PageContext);

    const TitleHandler = (e)=>{
            setTitle(e.target.value);
    }
    const InstituteHandler=(e)=>{
        setInstitute(e.target.value);
    }

    const LinkHandler = (e)=>{
        setLink(e.target.value);
    }
    const certSubmitHandler =(e)=>{

        e.preventDefault();
        const item ={title:title,institute:institute,link:link,id:props.id};
        addPageFour(item);
        console.log(item);
        setTitle("");
        setInstitute("");
        setLink("");

    }

    return(<div>
        <form onSubmit={(e)=>{certSubmitHandler(e)} } >
      <div>
        <input type="text" value={title} onChange={(e)=>TitleHandler(e)} placeholder="Title" />
        <input type="text" value={institute} onChange={e=>InstituteHandler(e)} placeholder="institute" />
        <input type="text" value={link} onChange={e=>LinkHandler(e)} placeholder="link" />
        
      </div>
       <Button variant="success" type="submit"> OK </Button>
      </form>
    </div>)


}


export default Certification;