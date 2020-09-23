import React,{useState,useContext,useEffect} from 'react'
import  Certification from './certification'
import HomeNav from '../HomeNav/homenav'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './addCertification.css'
const AddCertification = ()=>{

    const [certifications,setCertifications] = useState([]);


    const addCertificationHandler = ()=>{


        setCertifications([...certifications,{}]);
    }

    return(<div>
 <HomeNav>

 </HomeNav>
        <h1>Certifications</h1>
        <hr/>
      <div className="cert-flex">
       <Certification id="1" ></Certification>
       <Certification id="2" ></Certification>
      </div>

      <div  className="link-flex" >

<div className="" >
<Button variant="danger" >
<Link style={{textDecoration:"none" , color:"white" }} to="/form/experience">PREVIOUS </Link>
</Button>
</div>

<div className="" >

<Button variant="primary">
<Link style={{textDecoration:"none",color:"white" }} to="/form/finalpage" >NEXT</Link>
</Button>

</div>

</div>
    </div>)


}


export default AddCertification;