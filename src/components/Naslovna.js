import React, { Component } from "react";
import { ImInstagram } from "react-icons/im";
import { MdEmail } from "react-icons/md";


 class  Naslovna extends Component{

    render() {
        const myStyle={
            backgroundImage:"url('https://static.vecteezy.com/system/resources/thumbnails/002/071/788/small/abstract-hexagon-pattern-background-medical-and-science-concept-and-structure-molecule-and-communication-free-vector.jpg')",
            height:'0vx',
            fontSize:'20px',
            marginTop:'200px',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            AnimationEffect: 'pop 0.4s',
            textDecoration: 'underline',

        };
    
 
    return(
        <div>
        
        <div style={myStyle}>
        <h1>Dobrodošli na sajt naše ordinacije!
            Ukoliko želite da zakažete pregled, ukucajte rutu prijava!
            Ukoliko želite da proverite status Vaše knjižice, ukucajte rutu provera!
        </h1>
        </div>
            <button className="btn1">
          <ImInstagram />
        </button>

        <button className="btn2">
          <MdEmail />
        </button>
        
        
    </div>
    );
    }
    
 }
export default Naslovna;