import React,{useState,useContext,useEffect} from 'react'
import  Certification from './certification'
import HomeNav from '../HomeNav/homenav'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './addCertification.css'
import ProgressBar from '../Progressbar/progressbar'
import {PageContext} from '../contexts/pagecontext'
const AddCertification = ()=>{

    const [certifications,setCertifications] = useState([]);
    const {progress,updateProgress,pageFour} = useContext(PageContext)

    const [cert1,cert2] = [...pageFour];

    const addCertificationHandler = ()=>{


        setCertifications([...certifications,{}]);
        
    }

    return(<div>
 <HomeNav>

 </HomeNav>
        <div className="container" >
        <h1>Certifications</h1>
        <hr/>
        <ProgressBar now={progress} />
      <div className="cert-flex">
       <Certification id="1" title={cert1?cert1.title:""} institute={cert1?cert1.institute:""}  isComplete={cert1?cert1.isComplete:false} ></Certification>
       <Certification id="2"  title={cert2?cert2.title:""} institute={cert2?cert2.institute:""}  isComplete={cert2?cert2.isComplete:false} ></Certification>
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
        </div>

    </div>)


}


export default AddCertification;