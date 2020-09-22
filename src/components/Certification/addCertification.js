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
      <div className="cert-flex">
       <Certification id="1" ></Certification>
       <Certification id="2" ></Certification>
      </div>

      <div className="ex-link" >
      <Button variant="primary" > 
      <Link style={{textDecoration:"none" ,color:"white" }} to="/form/finalpage" >Next </Link>
      </Button>
       </div>
    </div>)


}


export default AddCertification;