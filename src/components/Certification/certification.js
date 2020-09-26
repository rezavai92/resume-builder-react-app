import React,{useState,useEffect,useContext}  from 'react'
import './certification.css'
import HomeNav from '../HomeNav/homenav'
import {PageContext} from '../contexts/pagecontext'
import {Button} from 'react-bootstrap'
import './certification.css'
const Certification = (props)=>{

    const [title,setTitle] =useState(props.title);
    const [institute,setInstitute] = useState(props.institute);
    const [link,setLink] = useState(props.link);
    const[isComplete,setIsComplete]=useState(props.isComplete)
    const { addPageFour,progress,updateProgress} = useContext(PageContext);


   
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
        const p = isComplete?null:12.5;
        updateProgress(progress+p);
        setIsComplete(true)
        const item ={title:title,institute:institute,link:link,id:props.id,isComplete:true};
        addPageFour(item);
       
        console.log(item);
        setTitle("");
        setInstitute("");
        setLink("");

    }

    return(<div>
        <form onSubmit={(e)=>{certSubmitHandler(e)} } >
      <div  >
          <h1> #{props.id}. </h1>
          <div className="cert-inp" >
        <input type="text" value={title} onChange={(e)=>TitleHandler(e)} placeholder="Title" />

        </div>
       <div className="cert-inp" > <input type="text" value={institute} onChange={e=>InstituteHandler(e)} placeholder="institute" />
       </div>
        <div className="cert-inp" >
            <input type="text" value={link} onChange={e=>LinkHandler(e)} placeholder="link" />
         </div>
        <div>       <Button variant="success" type="submit"> OK </Button>
         </div>
       </div> 
      </form>
    </div>)


}


export default Certification;