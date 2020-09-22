import React from 'react'
import {Link} from 'react-router-dom'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import './home.css'
import HomeNav from '../HomeNav/homenav'

const Home = ()=>{

return(<div>
 <HomeNav> </HomeNav>

    <div className="box" >
        <Link to="/form/basicinfo" ><h1>Let's Build</h1></Link>
    </div>
</div>)

}

export default Home;