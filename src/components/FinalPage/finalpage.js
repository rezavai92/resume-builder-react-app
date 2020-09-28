import React,{useState,useEffect,useContext,useRef} from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import {PageContext} from '../contexts/pagecontext'
import {Link} from 'react-router-dom'
import './finalpage.css'
import {Button,Spinner} from 'react-bootstrap'
import HomeNav from '../HomeNav/homenav'
import Cert from './cert'
import PageLoader from '../PageLoader/pageloader'
const FinalPage =()=>{
    //const [obj,setObj]=useState({});
    const [pageOne,setPageOne] =useState({name:"",email:"",gender:"",address:"",src:"",phone: "" });
    const[pageTwo,setPageTwo] = useState({institute:"",degree:"",passingYear:"",cgpa:""});
    const [pageThree,setPageThree] = useState([{title:"",role:"",desc:"",from:"",to:""},{title:"",role:"",desc:"",from:"",to:""}]);
    const [pageFour,setPageFour] = useState([{title:"",institute:"",link:"" },{title:"",institute:"",link:"" }]);
    const {finalPage} =useContext(PageContext);
    const[isLoading,setIsLoading] =useState(true)
    console.log(pageFour);
    
    const [exp1,exp2] =pageThree?pageThree:[{title:"",role:"",desc:"",from:"",to:""},{title:"",role:"",desc:"",from:"",to:""}];
    
    const [cert1,cert2] =pageFour?pageFour:[{title:"",institute:"",link:"" },{title:"",institute:"",link:"" }];
    
    useEffect(()=>{
        setPageOne( finalPage.pageOne );
        setPageTwo(finalPage.pageTwo);
        setPageThree(finalPage.pageThree);
        setPageFour(finalPage.pageFour);
        setTimeout(()=>{setIsLoading(false);
        },1000)

    },[])

    const myRef = useRef();

    
   const  handlePdf = () => {
        const input =myRef.current; 
      //  html2canvas(input,{useCORS:true})
             html2canvas(input,{useCORS:true})
      .then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
    
        
    
        const pdf = new jsPDF('p','mm','a4');
        let imgProps = pdf.getImageProperties(imgData);
        console.log(imgProps)

        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        var pdfHeight = (imgProps.height*width)/imgProps.width;
        
         pdf.addImage(imgData, 'PNG', 0, 0,width,height);
        // pdf.addHTML(imgData,10,10);
    
         
    
        pdf.save("resume.pdf");
      });
    ;
    
    
    
        
    }
    
    return(<div>
         <HomeNav></HomeNav>
    {isLoading?<div className="pdf-loader"> 

        <PageLoader  text="Getting Ready" />
    </div>:null}
   <div>
      
      
     
  
          
  <div style={{textAlign:"center",marginTop:"2%"}}>
  <Button variant="primary" >
   <Link to="/form/certification" style={{textDecoration:"none",color:"white" }} >
             previous page
   </Link>
   </Button>
  </div>
  {pageOne||pageTwo||pageThree?
  <div className="cv-holder Container" >  
  <div className="pdf-button"> <Button variant="primary"  onClick={handlePdf}  >download PDF</Button> </div>
  <div ref={myRef}  className="cv">
  
  <div className="item1" > 
  
  <img src={pageOne.src} height="150px" width="150px" />
      
  <h3>{pageOne.name}</h3> 
  
  <p>{pageOne.address}</p>
  
  <div> 
  <p>  <span>Gender:</span>  {pageOne.gender}</p>
  <p><span >Email : </span>{pageOne.email}</p>
  <p><span >Phone :</span>{pageOne.phone}</p>
         
  </div>
  </div>
  
  <div className="item2">
     <h2>Education</h2>
     <p > {pageTwo.degree} </p>
     <p> {pageTwo.institute} </p>
     
      <p> <span>Passing Year :</span> {pageTwo.passingYear} , <span>CGPA :</span>{pageTwo.cgpa} </p>
      
  </div>
  
  <div className="item3"> 
  <h2> Certification </h2>
  {cert1?<Cert no="1" title={cert1.title} institute={cert1.institute} link={cert1.link} >
  
  </Cert>:null 
  
  }
  
  {cert2?<Cert no="2" title={cert2.title} institute={cert2.institute} link={cert2.link} >
  
  </Cert>:null} 
  
  </div>
  <div className="item4"> 
  
     <h2>Experience</h2>
     <div className="item4-flex"> 
     
     {exp1? <div>
         <h5>#1.</h5>
      <p >  <span > Company Name: </span> {exp1?exp1.title:""}</p>
      <p> <span  > Position : </span> {exp1?exp1.role:""}</p>
      <p> <span > Descritption : </span> </p>
      <p> {exp1?exp1.desc:""}</p>
      <p>{exp1?exp1.from:""} <span style={{fontWeight:"bold"}} >to</span> {exp1?exp1.to:""} </p>
    
      </div>:null}
  
     {exp2? <div>
          <h5>#2.</h5>
      <p >  <span > Company Name: </span> {exp2?exp2.title:""}</p>
      <p> <span  > Position : </span> {exp2?exp2.role:""}</p>
      <p> <span > Descritption </span> </p> 
      <p>{exp2?exp2.desc:""}</p>
      <p>{exp2?exp2.from:""} <span style={{fontWeight:"bold"}} >to</span> {exp2?exp2.to:""} </p>
      </div>:null}
     </div>
  
  </div>
  
  
      
  </div> 
  </div>
  : <p style={{textAlign:"center"}} >Nothing to Show,please go back and fill up previously asked fields</p> }
      
         </div>

   
    </div>)
}

export default FinalPage;