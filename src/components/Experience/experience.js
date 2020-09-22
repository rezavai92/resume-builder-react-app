import React,{useContext,useState,useRef} from 'react'
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

const myRef = useRef();



const   {addPageThree  }  = useContext(PageContext);




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

    addPageThree({title:title,role:role,desc:desc,from:from,to:to,id: id });
    console.log(title);
    setTitle("");
    setRole("");
    setDesc("");
    setFrom("");
    setTo("");
   // myRef.current="<div> Added</div>"

    console.log(myRef.current[0
    ])
}

return (
          <div> 
              <HomeNav></HomeNav>
        <div className="container">
        
        <form onSubmit={ (e)=>{submitHandler(e)} } >
        
        <div className="jumbotron" >
        <div ref={myRef}  className="ex-flex" >
        <div>
            <input onChange={(e)=>{titleChangeHandler(e)}} value={title} placeholder="title" />
        </div>
        <div>
            <input onChange={ (e)=>{roleChangeHandler(e)} } value={role} placeholder="role" />
        </div>
        <div>
            <textarea rows="10" cols="45" maxLength="500" onChange={(e)=>{descriptionChangeHandler(e)}} value={desc} placeholder="job description" />
        </div>
            <div className="date">
            <span style={{fontWeight:"bold"}} > From: </span> <input onChange={ (e)=>{fromChangeHandler(e) }} value={from} placeholder="from" type="date" />
            </div>
            <div className="date">
            <span style={{fontWeight:"bold"}} > To: </span><input onChange={ (e)=>{toChangeHandler(e)} } value={to} placeholder="to" type="date" />

          </div>
        </div >
        <div style={{textAlign:"center"}}>
        <Button type="submit" varinat="success" > Finish Step </Button>
        </div>
        </div>
        </form>
        </div>  
</div>)
}

export default Experience;


