import React,{useContext,useState,useEffect} from 'react'
import  {PageContext} from '../contexts/pagecontext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import HomeNav from '../HomeNav/homenav'
import './pagetwo.css'


const PageTwo =()=>{
    const [institute,setInstitute] = useState("");
    const [degree,setDegree] = useState("");
    const [passingYear,setPassingYear] = useState("");
    const [cgpa,setCgpa] = useState("");
    const {pageTwo,addPageTwo} = useContext(PageContext);
    
    useEffect(()=>{
        
        setInstitute(pageTwo.institute);
        setDegree(pageTwo.degree);
        setPassingYear(pageTwo.passingYear);
        setCgpa(pageTwo.cgpa);
    
        
    },[])
   
    const instituteChangeHandler=(e)=>{

        const n = e.currentTarget.value;
        setInstitute(n);
    }

    const degreeChangeHandler=(e)=>{
        const n = e.currentTarget.value;
        setDegree(n);
    }
    

    const passingYearChangeHandler=(e)=>{
        const n = e.currentTarget.value;
        setPassingYear(n);
    }
    

    const cgpaChangeHandler =(e)=>{

        const n = e.currentTarget.value;
        setCgpa(n);
    }
    


    const submitHandler =(e)=>{

        e.preventDefault();
        const item ={institute:institute,degree:degree,passingYear:passingYear,cgpa:cgpa};
        addPageTwo(item);
        setInstitute("");
        setDegree("");
        setPassingYear("");
        setCgpa("");

    }

    return(
    
    <div>
        <HomeNav> 
            
        </HomeNav>
<div className="container pagetwo">
        <h2>Education</h2>
        <form onSubmit={(e)=>{submitHandler(e)}} >

            <div className="jumbotron" >

            <div  >
                <div className="university">
                <input onChange={(e)=>{instituteChangeHandler(e)}} value={institute} type="text" placeholder="Name of Institute" />
                </div>
                <div className="degree" >
                <input onChange={(e)=>{degreeChangeHandler(e)}} 
                value={degree}
                placeholder="Degree (e.g. Bsc in Computer Science)" />
                </div>
                <div className="passing-year" >  
                 <input onChange={(e)=>{passingYearChangeHandler(e)}}
                 value ={passingYear}
                 placeholder="passing year (e.g. 2020) " type="number"  />
                </div>
               
                <div className="cgpa" >
                    <input onChange={(e)=>{cgpaChangeHandler(e)}}
                    value={cgpa}
                    type="number" placeholder=" CGPA (e.g. 3.50)" />
                </div>
                <div className="submit">  
                    <Button type="submit" variant="success" >Ok</Button>
                 </div>
                </div>

                <div className="link-flex" >

                <div className="" >
                <Button variant="danger" >
                <Link style={{textDecoration:"none" , color:"white" }} to="/form/basicinfo">PREVIOUS </Link>
                </Button>
                </div>

                <div className="" >

               <Button variant="primary">
               <Link style={{textDecoration:"none",color:"white" }} to="/form/experience" >NEXT</Link>
               </Button>

                </div>

                </div>

            </div>
         
           
        </form>

        
        
    </div>
    </div>
    
    
   )
}

export default PageTwo;