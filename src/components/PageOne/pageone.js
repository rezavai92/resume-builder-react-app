import React,{useContext,useState,useEffect} from 'react'
import  {PageContext} from '../contexts/pagecontext'
import {Link} from 'react-router-dom'
import './pageone.css'
import {Button,InputGroup,FormControl,Form} from 'react-bootstrap'
import HomeNav from '../HomeNav/homenav'

const PageOne =()=>{
    const{pageOne,addPageOne} = useContext(PageContext);
   // console.log(pageOne);
    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] =useState("");
    const [gender,setGender] = useState("");
    const [src,setSrc] =useState('');
    const [phone,setPhone] = useState('');
    
    
    useEffect(()=>{
    
        setName (pageOne.name);
        
        setEmail(pageOne.email);
        setAddress(pageOne.address);
        setPhone(pageOne.phone);
    },[])

    const addressChangeHandler=(e)=>{

        const val=   e.currentTarget.value;
        setAddress(val);
        
       }
   
    const genderChangeHandler =(e)=>{
        const val=   e.currentTarget.value;
     setGender(val);
     

    }
    const nameChangeHandler=(e)=>{

     const val=   e.currentTarget.value;
     setName(val);
     
    }

    const emailChangeHandler=(e)=>{

        const val = e.currentTarget.value;
        setEmail (val);
    }
    const phoneChangeHandler=(e)=>{

        const val = e.currentTarget.value;
        setPhone (val);
    }
    

    const loadFileHandler =(e)=>{
       const src= URL.createObjectURL(e.currentTarget.files[0]);
       setSrc(src);
       console.log(src);
    }
    const submitHandler =(e)=>{

        e.preventDefault();
        //console.log(firstName);
        console.log("hello from submit")
        const item ={name:name,email:email,phone:phone ,gender:gender,address:address, src:src };
        
       addPageOne(item);
       setName("");
       setEmail("");
       setAddress("");
       setSrc("");
       setPhone("");
       setGender("");

    }
    
    return(<div>


<HomeNav></HomeNav>

<div className="container">
        <h2>Personal Information</h2>
        <form className="form"  onSubmit={(e)=>{submitHandler(e)}} >
            <div >


            <div className="jumbotron "> 

               <div className="inp"> <input value={name} placeholder="Full Name"  onChange={(e)=>{nameChangeHandler(e)}} /></div>
               <div className="inp" > <input value={email} placeholder="Email"  onChange={(e)=>{emailChangeHandler(e)}} /></div>
              <div className="inp"> 
                   <input value={address}  placeholder="Address" onChange={(e)=>{addressChangeHandler(e)}} /> </div>
                <div className="inp">    
                 <input value={phone} placeholder="Mobile No"  onChange={(e)=>{phoneChangeHandler(e)}} />
                 </div>
            

            
            <div className="photo-gender" >
                        <div className="photo" >
                        <label for ="pic" >Upload Photo</label>
                        <input type="file" id="pic"  accept="image/*" name="image" id="file"  onChange= {(e)=>loadFileHandler(e)}  />
                        </div>

                        <div className="gender" >
                        <input type="radio" id="male" onClick={(e)=>{genderChangeHandler(e)}} name="gender" value="Male"/>
                        <label for="male">Male</label>
                        <input type="radio" id="Female" name="gender" onClick={(e)=>{genderChangeHandler(e)}}  value="Female" />
                        <label for="female">Female</label>
                        </div>


            </div>
                        
                        
                        <div className="button">
                        
                      <Button type="submit" variant="success" >Ok </Button>
                        </div>

                    
                        <div className="link-flex" >

                <div className="" >
                <Button variant="danger" >
                <Link style={{textDecoration:"none" , color:"white" }} to="/">PREVIOUS </Link>
                </Button>
                </div>

                <div className="" >

               <Button variant="primary">
               <Link style={{textDecoration:"none",color:"white" }} to="/form/education" >NEXT</Link>
               </Button>

                </div>

</div> 
                        </div>
                        </div>
                        
                        
                    
         </form>
        


    </div>
    </div>)
}

export default PageOne;