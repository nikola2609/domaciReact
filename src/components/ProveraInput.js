import { useState } from "react";


function ProveraInput(props){

    const [LBO, setLBO]= useState('');
    const [status, setStatus]= useState('');

    
    function handleLBO(e){
        setLBO(e.target.value);
    }
    
    function proveri(e){
        var element= props.pacijenti.filter(function(p){
            return p.LBO == LBO;
        })
        if(element.length !==0){
            alert('Status: ' + element[0].status);
        }
        else{
            alert('Status: ' + 'knjižica nije overena! ');
            
        }
    }

    const design = { margin: 10, borderStyle: "" };
return (
    <div>
            <div className="card" style={design}>
      <img
        className="card-img-top"
        src="https://www.alo.rs/data/images/2016-10-03/66586_plasticna-zdravstvena-knjizica-060916-ras-foto-ana-paunkovic-5-preview-1000x0_orig.jpg"
        alt="Neka slika"
      /></div>

        <div className="element-forme">
            <h6>Unesite Vaš LBO: </h6>
            <input type={'text'} className="inputProvera" value={LBO} onChange={handleLBO}></input>
            <button type="button" onClick={proveri} className="dugme_za_proveru" vaule={LBO}>Proveri status</button>
            
        </div>
    </div>
);
}

export default ProveraInput;