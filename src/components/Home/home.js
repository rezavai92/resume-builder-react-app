import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import './home.css'
import HomeNav from '../HomeNav/homenav'
import PageLoader from '../PageLoader/pageloader'


const Home = ()=>{

  const[isLoading,setIsLoading] =useState(true);
  
  useEffect(()=>{setTimeout(()=>{setIsLoading(false)},1000) },[])

return(<div>
  {isLoading? <PageLoader text="Welcome!" />:
  
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