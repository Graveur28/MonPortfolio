import { useEffect, useState } from 'react';
import '../style/carousselPerso.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


interface Idata {
        id:number;
        img:string;
        textsup:string
      }

export default  function CarousselPerso({data,theme}:{data:Idata[],theme:string}) {
 
    const [indCourent,setIndCourent]=useState(0);

  
    //const [pauseAutoPlay,setPauseAutoPlay]=useState(true);

    //autoplay
    useEffect(()=>{
        const interval=setInterval(() => {
            // pauseAutoPlay && 
            setIndCourent((precedeIndx) => (precedeIndx + 1) % data.length); 
            //setfade(true);
        }, 2500); 
       return () => clearInterval(interval);
    });

    //f(x) precedent et suivant 
    const handleSuivant=()=>{setIndCourent(indCourent === data.length - 1? 0 : indCourent + 1);};
    const handlePrecedent=()=>{setIndCourent(indCourent === data.length - 1 ? 0 : indCourent - 1);};
  return ( 
    <div className={`caroussel ${theme}`}>
        <div className="carousselDetails">
           <div className="pres1 fade"  key={data[indCourent].id} >
              <div className="partGauche">
                  <div className="partgaucheContent">
                       <p className='h55'> {"<"}<span className='balish5'>h5</span> {">"} <span className='enVertsite sizEnv'>Salut!</span> {"</"} <span className='balish5'>h5</span>  {">"}</p>
                       <p className='h11'> {"<"}<span className='balish5'>h1</span> {">"} <span className='wordd'>je suis <span className='dataEnv enVertsite'>{data[indCourent].textsup? data[indCourent].textsup : "" }</span> </span> {"<"} <span className='balish5'>h1</span>  {"/>"} </p>
                       <div className="btss">
                          <button className='bntac'> M'ecouter</button>
                          <button className='bntac rf'>Mon travail</button>
                       </div>
                  </div>
              </div>
              <div className="partDroite">
                  <img className='imgDrt' src={data[indCourent].img} alt="" />
              </div>
          </div>
           <span className='lesIndicat'>
              {data.map((_,id)=>{
                return (
                    <button key={id} onClick={()=>setIndCourent(id)} className={indCourent === id? "Indicateur" : "Indicateur indicInactive fade" }></button>
                ) 
              })}
           </span>
           <NavigateBeforeIcon onClick={handlePrecedent} className='btnCarousselRecent'/>
           <NavigateNextIcon onClick={handleSuivant} className='btnCarousselSuivant' />
      </div>
 </div>
  );
}

