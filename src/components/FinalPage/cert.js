import React from 'react'


const Cert = (props)=>{


return(<div>
<h5>#{props.no}:</h5>
<p><span style={{fontWeight:"bold"}}>Title : </span> {props.title} </p>
<p><span style={{fontWeight:"bold"}}>Institute : </span> {props.institute} </p>
<p> <span style={{fontWeight:"bold"}}>Link : </span> {props.link} </p>
</div>)
}


export default Cert