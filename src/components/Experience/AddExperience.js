import React,{useState,useContext,useEffect,createRef,useRef} from 'react'
import {Link} from 'react-router-dom'
import Experience from './experience'
import './addExperience.css'
import {PageContext} from '../contexts/pagecontext'
import {Button} from 'react-bootstrap'
import HomeNav from '../HomeNav/homenav'

const AddExperience =()=>{
const [boundary,setBoundary] = useState(2);
const [visibility,setVisibility] = useState(false);
 const myRef = useRef(null);

 const [experiences,setExperiences] =useState([]);

 const{pageThree,limit,changeLimit}  =useContext(PageContext);

 useEffect(()=>{
    const ex=[...pageThree]; 
    setExperiences(ex);
   // let l = 2-experiences.length;
    //console.log(experiences.length);
    //setBoundary(l);
    setBoundary(limit);
    //console.log("running")
    //console.log("running")
    return ()=>{
        //updateLimit();
    }

 },[])

console.log(limit)
 const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
 
   const addExperienceHandler=()=>{

     if(boundary>0){
        setExperiences([...experiences,{title:"",role:"",desc:"",from:"",to:"",id:generateKey(Math.random())}]);
        let l =boundary;
        l--;
        setBoundary(l);
       // changeLimit();
     }
     else{

        setVisibility(true);
     }
    }

    const mappedExperiences = experiences.map((e)=>{return<div key={e.id} >

        <Experience role={e.role} desc={e.desc} title={e.title} from={e.from} to={e.to} id={e.id} > </Experience>
    </div>})
    return(<div>
 <HomeNav></HomeNav>
<div className="container">
            <h2>Experience</h2>
        
        <div style={{textAlign:"center"}} > 
        
        
        <Button variant="primary" onClick={addExperienceHandler} >Add Experience</Button>
        
        </div> 
             <div className="error-box" style={{visibility:visibility?"visible" : "hidden" }} >
             <p>You can't add more than two experiences</p>
             <Button variant="danger" onClick={()=>{setVisibility(false)}} > close </Button>
            </div> 

        
        <div className="form-flex" >
        {  mappedExperiences }
        </div>
        
       <div className="ex-link" >
      <Button variant="primary" > 
      <Link style={{textDecoration:"none" ,color:"white" }} to="/form/certification" >Next </Link>
      </Button>
       </div>
    </div>
    </div>)
}

export default AddExperience;