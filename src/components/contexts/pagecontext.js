import React,{createContext,useState,useEffect} from 'react'

export const PageContext =createContext();

const PageContextProvider =(props)=>{

    const [pageOne,setPageOne]=useState({});
    const [pageTwo,setPageTwo] = useState({});
    const [pageThree,setPageThree] = useState([]);
    const [pageFour,setPageFour] = useState([]);
    const [finalpage,setFinalPage] = useState({});
    const [limit,setLimit] = useState(2);
    
    useEffect(()=>{
        //console.log("running from page context")
        setFinalPage({pageOne:pageOne,pageTwo:pageTwo ,pageThree:pageThree ,pageFour:pageFour});
        setLimit(2-pageThree.length);
        console.log("running from context",pageFour.length
        );
    },[pageOne,pageTwo,pageThree,pageFour]);

    const addPageFour = (item)=>{
        console.log("item  for page four enters in page context",item);
        let pageFourList = [...pageFour];
        if(item.id ==='1'){
            pageFourList.splice(0,1,item);
            console.log("after splicing", pageFour)
        }
        else{
            pageFourList.splice(1,1,item);
        }
        setPageFour(pageFourList);
    }
    const addPageThree = (item)=>{
        let pos =pageThree.length;
        console.log(item)
        const filteredPageThree = pageThree.filter((p,index)=>{ if(p.id===item.id){pos=index} return p.id!==item.id })
        
        filteredPageThree.splice(pos,0,item);
        setPageThree(filteredPageThree);

       console.log("running after adding from experinece.js" ,pageThree);

    }


    const addPageOne = (item)=>{
        
        
        setPageOne(item);
       // console.log(pageOne);
      

    }

    const addPageTwo =(item)=>{

        setPageTwo(item);
        console.log(pageTwo);
       
    }

    const changeLimit= ()=>{
        let l=limit;
        l--;
        setLimit(l)
    }

   

    return (
        <PageContext.Provider value={{ pageFour:pageFour,pageOne: pageOne,pageTwo:pageTwo,pageThree:pageThree,finalPage:finalpage,
        addPageOne:addPageOne,limit:limit,changeLimit:changeLimit,addPageFour:addPageFour ,addPageTwo: addPageTwo, addPageThree:addPageThree}} >
           
            {props.children}

        </PageContext.Provider>
    )


}


export default PageContextProvider;