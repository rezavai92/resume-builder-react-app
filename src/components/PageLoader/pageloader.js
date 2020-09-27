import React from 'react'
import {Spinner} from 'react-bootstrap'
import "./pageloader.css"
const Loader = (props)=>{


return(<div  className="spinner">
<h3>
      {props.text}
</h3>
<div>
<Spinner animation="border" role="status">
  <span className="sr-only"></span>
  
</Spinner>

</div>
</div>)
}

export default Loader;