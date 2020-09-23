import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import PageOne from './components/PageOne/pageone';
import PageTwo from './components/PageTwo/pagetwo';
import FinalPage from './components/FinalPage/finalpage';
import AddExperience from './components/Experience/AddExperience'
import PageContextProvider from './components/contexts/pagecontext';
import Certification from './components/Certification/addCertification'
import Home from './components/Home/home'
import HomeNav from './components/HomeNav/homenav'
import Pricing from './components/Pricing/priciing'
import Features from './components/Features/feature'
import './App.css'




const App=()=>{


return(
    <div>         

 <PageContextProvider>
 <BrowserRouter>
   <Route path="/" exact component={Home}  /> 
  <Route path='/form/basicinfo'  exact component={PageOne} />
  <Route path='/form/education' exact component={PageTwo}  />
  <Route path='/form/finalpage' exact component={FinalPage}  />
  <Route path='/form/experience' exact component={AddExperience} />
  <Route path="/form/certification" exact component={Certification} />
  <Route path="/pricing" exact component={Pricing} />
  <Route  path="/features" exact component ={Features}  />

 </BrowserRouter>
 </PageContextProvider>
 </div>
)
}
export default App;