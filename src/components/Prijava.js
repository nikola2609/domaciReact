import FormaPrijava from "./FormaPrijava";

function Prijava(){

    function PrijaviSe(ime, prezime, datum, LBO){
        alert('Poštovani/a ' + ime + ' ' + 'uspešno ste zakazali pregled!'+ ' ' +
        'Molimo Vas proverite status knjižice!');

    }

    return (
        <div>
            <FormaPrijava naslov='Zakažite Vaš pregled!' funkcija={PrijaviSe}/>
        </div>
    );
}
export default Prijava;