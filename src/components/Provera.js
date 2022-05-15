import ProveraInput from "./ProveraInput";


function Provera(){

    const pacijenti=[
         {ime: 'Marko', prezime: 'Markovic', LBO: 12345678, status:'Knjižica je overena!' },
         {ime: 'Petar', prezime: 'Petrovic', LBO: 12121212, status:'Knjižica je overena!'},
         {ime: 'Sava', prezime: 'Stankovic', LBO: 12346789 ,status:'Knjižica je overena!'},
         {ime: 'Janko', prezime: 'Jankovic', LBO: 55221133 ,status:'Knjižica je overena!'},
         {ime: 'Sara', prezime: 'Nikolic', LBO: 89890000, status:'Knjižica je overena!' },
         {ime: 'Milos', prezime: 'Saric', LBO: 12312344, status:'Knjižica je overena!'},
         {ime: 'Nina', prezime: 'Stojkovic', LBO: 12346638 ,status:'Knjižica je overena!'},
         {ime: 'Marija', prezime: 'Maricic', LBO: 12346899 ,status:'Knjižica je overena!'},
         {ime: 'Marta', prezime: 'Martic', LBO: 12346880 ,status:'Knjižica je overena!'},
     ]

    return(
        <div>
            <ProveraInput pacijenti={pacijenti}/>
        </div>
    );
}
export default Provera;

