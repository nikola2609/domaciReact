import { useState } from "react";

function FormaPrijava(props){

    const [ime, setIme]= useState('');
    const [prezime, setPrezime]= useState('');
    const [datum, setDatum]= useState('');
    const [LBO, setLBO]= useState('');


    function handleIme(e){
        setIme(e.target.value);
    }

    function handlePrezime(e){
        setPrezime(e.target.value);
    }

    function handleDatum(e){
        setDatum(e.target.value);
        
    }

    function handleLBO(e){
        setLBO(e.target.value);
       
    }

    return (
        <div>
            <h2>{props.naslov}</h2>
            <form className="forma-prijava">
                <div className="element-forme">
                    <label>Ime: </label>
                    <input type={'text'} className="input_prijava" value={ime} onChange={handleIme}></input>
                </div>
                <div className="element-forme1">
                    <label>Prezime: </label>
                    <input type={'text'} className="input_prijava" value={prezime} onChange={handlePrezime}></input>
                </div>
                <div className="element-forme2">
                    <label>LBO: </label>
                    <input type={'text'} className="input_prijava" value={LBO} onChange={handleLBO}></input>
                </div>
                <div className="element-forme3">
                    <label>Datum: </label>
                    <input type={'date'} className="input_prijava" value={datum} onChange={handleDatum}></input>
                </div>
                <button type="submit" onClick={()=>props.funkcija(ime,prezime,datum,LBO)} className="dugme_prijava" value={LBO} onChange={handleLBO} >Zakaži pregled</button>

            </form>
        </div>
        
    );

}
export default FormaPrijava;