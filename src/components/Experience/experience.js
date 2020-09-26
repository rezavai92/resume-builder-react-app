import React,{useContext,useState,useRef, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import {PageContext} from '../contexts/pagecontext'
import './experience.css'
import HomeNav from '../HomeNav/homenav'
const Experience = (props)=>{

const [title,setTitle] = useState(props.title);
const [role,setRole] = useState(props.role);
const [desc,setDesc] = useState(props.desc);
const [from,setFrom] = useState(props.from);
const [to,setTo] = useState(props.to);
const [id,setId] = useState(props.id);
const[isComplete,setIsComplete] = useState(props.isComplete)


const   {addPageThree ,pageThree,progress,updateProgress }  = useContext(PageContext);




const titleChangeHandler = (e)=>{

    setTitle(e.target.value)
}

const roleChangeHandler =(e)=>{
setRole(e.target.value)

}

const descriptionChangeHandler = (e)=>{
setDesc(e.target.value);
}

const fromChangeHandler = (e)=>{
    setFrom(e.target.value)
}

const toChangeHandler = (e)=>{

setTo(e.target.value)

}

const submitHandler =(e)=>{

    e.preventDefault();
    let p =!isComplete? (progress+12.5):progress;
    updateProgress(p) ;
    setIsComplete(true);
    addPageThree({title:title,role:role,desc:desc,from:from,to:to,id: id,isComplete:true });
    console.log(title);
    
    setTitle("");
    setRole("");
    setDesc("");
    setFrom("");
    setTo("");
   // myRef.current="<div> Added</div>"

    
}

return (
          <div> 
              
        <div className="container">
        
        <form onSubmit={ (e)=>{submitHandler(e)} } >
        
        <div className="jumbotron" >
        <div   className="ex-flex" >
        <div>
            <input onChange={(e)=>{titleChangeHandler(e)}} value={title} placeholder="title" />
        </div>
        <div>
            <input onChange={ (e)=>{roleChangeHandler(e)} } value={role} placeholder="role" />
        </div>
        <div>
            <textarea rows="5" cols="10" maxLength="525" onChange={(e)=>{descriptionChangeHandler(e)}} value={desc} placeholder="job description" />
        </div>
            <div className="date">
            <span style={{fontWeight:"bold"}} > From: </span> <input onChange={ (e)=>{fromChangeHandler(e) }} value={from} placeholder="from" type="date" />
            </div>
            <div className="date">
            <span style={{fontWeight:"bold"}} > To: </span><input onChange={ (e)=>{toChangeHandler(e)} } value={to} placeholder="to" type="date" />

          </div>
        </div >
        <div style={{textAlign:"center"}}>
        <Button type="submit" variant="success" > OK</Button>
        </div>
        </div>
        </form>
        </div>  
</div>)
}

export default Experience;


