import React,{useContext,useState,useEffect,useRef} from 'react'
import {ProgressBar} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

const Progressbar = (props)=>{

const myRef = useRef()    


const progressInstance = <ProgressBar now={props.now} label={`${props.now}%`} />;



// Assuming we have an empty <div id="container"></div> in
// HTML
//var bar =  Progressbar.Line(myRef.current, {easing: 'easeInOut'});


    return(<div ref= {myRef} >
        {progressInstance}
    </div>)
}

export default Progressbar;