import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import './home.css'
import HomeNav from '../HomeNav/homenav'
import PageLoader from '../PageLoader/pageloader'


const Home = ()=>{

  const[isLoading,setIsLoading] =useState(true);
  useEffect(()=>{setIsLoading(false)},[])

return(<div>
  {isLoading? <PageLoader/>:
  
  <div>
    <HomeNav> </HomeNav>


<div className="box" >
    <Link to="/form/basicinfo" ><h1>Let's Build</h1></Link>
</div>
    </div>
  
  }
  
</div>)

}

export default Home;