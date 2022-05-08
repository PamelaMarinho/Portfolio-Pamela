import { React, useEffect, useState } from 'react';
import './Name.css'

const Name = (props) => {


     const [offSetY, setOffSetY] = useState(0)
     const handleScroll = () => setOffSetY(window.pageYOffset)

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    

       if(props.msg==="PROJETOS"){
          return (
               <p className={props.msg} style={{marginLeft: offSetY * 0.3 - (window.innerHeight * 0.5)}} onScroll={''} >{props.msg}</p>
          )
       }
       if(props.msg==="SOBRE" || props.msg==="CONTATO")
       {
          return (
               <p className={props.msg} style={{marginLeft: -offSetY * 0.3 + (window.innerHeight * 0.5)}} onScroll={''} >{props.msg}</p>
          )
       }
       if(props.msg==="PAMELA")
       {
          return (
               <p className={props.msg} style={{marginLeft: -offSetY * 11, opacity: 1 - (offSetY*0.01) }} onScroll={''} >{props.msg}</p>
          )
       }
       if(props.msg==="MARINHO")
       {
          return (
               <p className={props.msg} style={{marginLeft: offSetY * 10, opacity: 1 - (offSetY*0.01) }} onScroll={''} >{props.msg}</p>
          )
       }
}

export default Name