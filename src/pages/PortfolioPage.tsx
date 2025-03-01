import '../style/PortfolioPage.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';
import { FormEvent, useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MonCv from '../assets/image/ExaucéNYEMBWE_dev.pdf';
import CarousselPerso from '../carrouselPerso/carousselPerso';
import {data} from '../pages/data';
import Btntop from '../btnTop/btntop';
import CountUp from 'react-countup';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Headroom from 'react-headroom';
import { Link  } from 'react-scroll';
import LensBlurIcon from '@mui/icons-material/LensBlur'; //Sofware//AppWeb
import SubtitlesIcon from '@mui/icons-material/Subtitles'; //jsp
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; //Developpemennt
import CodeIcon from '@mui/icons-material/Code'; //code
import DesignServicesIcon from '@mui/icons-material/DesignServices'; //web design
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; //Integration
import DoneIcon from '@mui/icons-material/Done'; //check
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import frontMe from '../assets/image/dessME.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import bilokos from '../assets/image/billokoa.png'

export default function PortfolioPage() {
    const [stateTheme,setStateTheme]=useState("noir")
    const changeTheme=()=>{
        if(stateTheme === 'noir'){setStateTheme('blanc')}
        else{setStateTheme('noir')}
    }
    
    //Menu Burger
    const [isOpen,setIsOpen]=useState(true)
    const setOpenstate=()=>{setIsOpen(!isOpen)}

    //AOS css
    useEffect(()=>{
     AOS.init({duration:2300});
    },[]);

    //Formulaire
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     
    if(!form.current) return;

    emailjs
      .sendForm('service_atji726', 'Yservice_atji726', form.current, {
        publicKey: '2Wc3vxd73eAwe72XT',})
      .then(() => {
          console.log('SUCCES!');
          toast.success("✅ Message envoyé avec succès !", { className: "msgDone",});
        },(error) => {
          console.log('ECHEC...', error.text);
          toast.error("❌ Erreur lors de l'envoi du message.",{className: "msgFailed",});
        },
      );
  };


  return (
        <div className={`PortfolioPage ${stateTheme} `}>
        <Btntop />
        <Headroom>
           <header >
              <div className={`containtHeader ${stateTheme}`}>
                 <div className="lienRet">
                    <a href="/"><span className='lBlz'>Exauce NY.</span></a>
                 </div>
                 <div className={`navigLinks ${isOpen? "hide":"showLis"}`}>
                   {/** */}
                    <ul>
                       <li><Link to="secFirst"  smooth={true} duration={500} offset={20} activeClass=".activeClss" spy={true}>Acceuil</Link></li>
                       <li><Link to="secAprop" smooth={true} duration={500} offset={30} activeClass=".activeClss" spy={true}><span>A propos</span></Link></li>
                       <li><Link to="secCvc" smooth={true} duration={500} offset={50} activeClass=".activeClss" spy={true}><span>Resume</span></Link></li>
                       <li><Link to="secServic" smooth={true} duration={500} offset={65} activeClass=".activeClss" spy={true}><span>Services</span></Link></li>
                       <li><Link to="secSkill" smooth={true} duration={500} offset={75} activeClass=".activeClss" spy={true}><span>Skills</span></Link></li>
                       <li><Link to="secProject" smooth={true} duration={500} offset={85} activeClass=".activeClss" spy={true}>Projets</Link></li>
                       <li><Link to="secContac" smooth={true} duration={500} offset={90} activeClass=".activeClss" spy={true}>Contact</Link></li>
                    </ul>
                 </div>
                 <button className='btTheme' onClick={changeTheme} style={stateTheme === 'noir'? {backgroundColor:'black',color:'white'}: {backgroundColor:'white',color:'black'}} >  {stateTheme ? <ModeNightIcon/> : <WbSunnyIcon/> }</button>
                  <div className="menuBurger">
                      <div className={isOpen? 'menuButton':'menuButtonOpen'} onClick={()=>setOpenstate()}>
                        <div className="menuButtonBurger">
                         
                        </div>
                     </div>
                  </div>
             </div>
           </header>
        </Headroom>
       <body>
         <div className="containtBody">

             <section  className="firts" id='secFirst' >
                 <CarousselPerso data={data} theme={stateTheme}/>                     
             </section>

            <section data-aos="fade-up"  className='secApropos' id='secAprop'>
                 <div className="contebtAprops">
                     <div className="drtt">
                        <img className='imgIam' src={frontMe} alt="" />
                     </div>
                     <div className="gchht">
                        <span className='titSect'>A propos</span>
                        <span className='soutTiSec'>A propos</span>
                        <span>Vos idees en realite numerique,Contactez-moi des aujourd'hui </span>
                        <table>
                              <td className='td1'>
                                 <tr><span className='droo'>Nom:</span></tr>
                                 <tr><span className='droo'>Date de naissance:</span></tr> 
                                 <tr><span className='droo'>Adresse:</span></tr> 
                                 <tr><span className='droo'>Email:</span></tr> 
                                 <tr> <span className='droo'>Telephone:</span></tr>
                              </td>
                              <td >
                                <tr><span className='gaud'>Exauce Nyembwe</span></tr> 
                                <tr><span className='gaud'>28 fevrier 2000</span></tr> 
                                <tr><span className='gaud'>Kinshasa,Limete 7ieme rue </span></tr> 
                                <tr><span className='gaud'>exaudinhonyembwe@gmail.com</span></tr> 
                                <tr><span className='gaud'>+243 991301132</span></tr> 
                              </td>
                        </table>
                        
                       <h4> <span className='spChif'>+<CountUp start={0}end={11} duration={6.75}></CountUp></span> Projects complets</h4>
                       <a href={MonCv} download="ExaucéNYEMBWE_dev.pdf" ><button className='btnDowl'>Telecharger le cv</button></a>
                     </div>
                </div>
            </section>

            <section data-aos="fade-up" className='secCv' id='secCvc'>
                <div className="containtResum">
                    <span className='titSect'>Mon cv</span>
                    <span className='soutTiSec'>Mon cv</span>
                    <span>Un cours résumer du contenu de mon cv démontrant ici par mon parcours d'étude et mes formations  </span>
                    <div className="divContent">
                        <div className="ligneCvrs">
                        <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2021-2024</span>
                                  <span className='diplo'>GENIE INFORMATIQUE </span>
                                  <span className='etabl'>LEADERSHIP ACADEMIA UNIVERSITY</span>
                                  <span className='resudd'>Un établissement d'excellence reconnu pour son 
                                    engagement envers l'innovation technologique par des formations axées sur la pratique et des projets concrets,
                                    a faire  acquérir en compétences solides en développement web et en ingénierie logicielle
                                    </span>
                               </div>
                            </div>
                           <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2022-2022</span>
                                  <span className='diplo'>Assitant IT</span>
                                  <span className='etabl'>POLO & MORE</span>
                                  <span className='resudd'> En tant qu’Assistant IT, j’ai eu l’opportunité de surveiller et d’analyser la réputation de la boutique en ligne
                                     grâce à des outils de suivi et de gestion des avis clients,contribuant à l’amélioration de l’image de marque et
                                     à la résolution proactive des problèmes techniques.
                                  </span>
                               </div>
                            </div>
                        </div>
                        <div className="ligneCvrs">
                            <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2021-2022</span>
                                  <span className='diplo'>Developpeur web </span>
                                  <span className='etabl'>Bilokos_RDC </span>
                                  <span className='resudd'>
                                    Participation à la conception et à l’optimisation de l'application web moderne 
                                    avec role de développer des interfaces réactives,améliorer l’expérience utilisateur
                                     et assurer la performance de la plateforme. 
                                 </span>
                               </div>
                           </div>
                           <div className="bpss">
                               <div className="containBpss">
                                  <span className='aneee'>2021-2022</span>
                                  <span className='diplo'>Diplome d'etat </span>
                                  <span className='etabl'>College saint raphael</span>
                                  <span className='resudd'>
                                   En section Mathématiques-Physique,une formation qui m’a permis de développer 
                                   une solide base en raisonnement logique et en résolution de problèmes. 
                                   Renforcant ainsi ma rigueur analytique,des compétences essentielles 
                                    que j’applique aujourd’hui dans le développement web et l’ingénierie logicielle.
                                  </span>
                               </div>
                           </div>
                        </div>
                    </div>
                    <a href={MonCv} download="ExaucéNYEMBWE_dev.pdf"><button className='btnCV'>Telecharger le cv</button></a>
                </div>
            </section>

            <section data-aos="fade-up"  className='secService' id='secServic'>
                <div className="containtServ">
                    <span className='titSect'>Services</span>
                    <span className='soutTiSec'>Services</span>
                    <span>Mes services dans les actisn coyurantes</span>
                    <div className="contentBoxSev">
                         <div className="lignebox">
                             <div className="boxServ">
                                 <CodeIcon className='customSvg'/>
                                 <span> Création de sites web</span>
                                 <hr className='SteticLign'/>
                             </div>
                             <div className="boxServ">
                                 <DeveloperModeIcon className='customSvg'/>
                                 <span>Développement d'applications web</span>
                                 <hr  className='SteticLign'/>
                             </div>
                             <div className="boxServ">
                                 <SubtitlesIcon className='customSvg'/>
                                 <span>Optimisation des performances</span>
                                 <hr className='SteticLign' />
                             </div>
                         </div>
                         <div className="lignebox">
                              <div className="boxServ">
                                 <DesignServicesIcon className='customSvg'/>
                                 <span>Web design</span>
                                 <hr className='SteticLign'/>
                             </div>
                             <div className="boxServ">
                                 <LensBlurIcon className='customSvg' />
                                 <span>Maintenance et mise à jour</span>
                                 <hr className='SteticLign' />
                             </div>
                             <div className="boxServ">
                                 <IntegrationInstructionsIcon className='customSvg'/>
                                 <span>Intégration de systèmes tiers</span>
                                 <hr className='SteticLign'/>
                             </div>
                         </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"  className='secSkil' id='secSkill'>
               <div className="containtSkill">
                     <span className='titSect'>Mes skills</span>
                     <span className='soutTiSec'>Skills</span>
                     <span className='descriC'>Toute mon expérience partagée en une section</span>
                     <div className="contentSkill">
                         <div className="divSkill2 r1">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/> <span>Javascript</span></div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"> <DoneIcon/> <span>Typescript</span>  </div>
                           </div>
                         </div>
                         <div className="divSkill2 r2">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>Figma</span>  </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>WordPress</span></div>
                           </div>
                         </div>
                         <div className="divSkill2 r3">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>Css</span>  </div>
                                
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>Html</span>  </div>
                           </div>
                         </div>
                         <div className="divSkill2 r4">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>NextJS</span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>NodeJS</span>  </div>
                           </div>
                         </div>
                         <div className="divSkill2 r5">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>PrismaClient</span>  </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>PostgreSql</span>  </div>
                           </div>
                         </div>
                         <div className="divSkill2 r6">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>Php</span>  </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>Tailwind</span>  </div>
                           </div>
                         </div>
                         <div className="divSkill2 r7">
                            <div className="barskilContent">
                                <div className="topBarSkil" data-aos="fade-up-right"><DoneIcon/><span>Django</span>  </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil" data-aos="fade-up-left"><DoneIcon/><span>ReactJs</span>  </div>
                           </div>
                         </div>
                     </div>
                </div>  
            </section>

            <section data-aos="fade-up"  className='secProjet' id='secProject'>
                <div className="contentProjet">
                    <span className='titSect'>Nos projets</span>
                    <span className='soutTiSec'>Projets</span>
                    <span className='descriC'>Des liens vers les projets réalisés</span>
                    <div className="projetcContaint">
                        <div className="caseBox">
                           <div className="divProj1 hopp">
                               <img src={bilokos} alt="" />
                               <span className='wdHidd'> <a href="https://bilokos.shop/">Web design et developpement</a></span>
                               <span className='wdHidd'>Bilokos Rdc</span>
                           </div>
                           <div className="divProj2 hopp">
                               <img src="" alt="" />
                               <span className='wdHidd'> <a href="">Projet full Stack</a></span>
                               <span className='wdHidd'>MarketPlace Y'a tout</span>
                           </div>
                        </div>
                        <div className="caseBox">
                           <div className="divProj2 hopp">
                                <img src="" alt="" />
                                <span className='wdHidd'> <a href="">Web design et developpement full Stack</a></span>
                                <span className='wdHidd'>Steven food</span>
                            </div>
                           <div className="divProj1 hopp">
                               <span> ... autres</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"  className='evaluation' id='secEval'>
                <div className="containtEvalution">
                    <div className="Stats">
                        <div className="boxStat">
                            <span className='numberStat'><CountUp start={0}end={10} duration={3}></CountUp></span>
                            <span>Trophes</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'><CountUp start={0}end={68} duration={4.75}></CountUp></span>
                            <span>Projets complet</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'><CountUp start={0}end={90} duration={5.75}></CountUp></span>
                            <span>clients satisfaits</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'><CountUp start={0}end={354} duration={6.75}></CountUp></span>
                            <span>Tasses de cafe</span>
                        </div>
                    </div>
                    <span className='declaFreelancing'>Je suis <span className='wordDispo'>disponible</span>  pour du freelancing</span>
                    <span className='phrasesCles'>Passionne par le deveopement web,je mets a profit mon savoir et ma creativite pour relever les defis et inover constaments. <br />
                    Mon parcours diversifier temoigne de ma capacite a m'adapeter rapidemnt et exceller dans des environemnt dynamioques</span>
                    <button className='btnEmbu'>Embauche-moi</button>
                </div>
            </section>

            <section data-aos="fade-up"  className='secContact' id='secContac'>
                <div className="containtContact">
                    <span className='titSect'>Contactez moi</span>
                    <span className='soutTiSec'>Contact</span>
                    <span className='descriC'>Mon adresse,mon numeo de telephone,mon mail,tout pour vous infomer de moi</span>
                    <div className="cartesAdressContent">
                        <div className="carteAdress">
                            <span className="svgImg"><PinDropIcon className='cvg'/></span>
                            <span className="Itadrs">ADRESSE</span>
                            <span className="adrs">Kinshasa,Limete 7ieme rue Q/Industriel </span>
                        </div>
                        <div className="carteAdress">
                            <span className="svgImg"><PhoneIcon className='cvg'/></span>
                            <span>NUMERO TELEPHONE</span>
                            <span>+243 991301132</span>
                        </div>
                        <div className="carteAdress">
                            <span className="svgImg"><SendIcon className='cvg'/></span>
                            <span>ADRESSE MAIL</span>
                            <span>exaudinhonyembwe@gmail.com</span>
                        </div>
                        <div className="carteAdress">
                            <span className="svgImg"><LanguageIcon className='cvg'/></span>
                            <span>SITE WEB</span>
                            <span><a href="">MonSite.com</a></span>
                        </div>
                    </div>
                    <div className="divForm">
                        <ToastContainer position="top-right" autoClose={3000} />
                        <div className="gaucheDivFomr">
                            <div className="gaucheDivFormContaint">
                                <div className="aginGauchDiv">
                                    <p>Contactez moi</p>
                                     <KeyboardDoubleArrowRightIcon className='twoflech'/>
                                </div>
                            </div>
                        </div>
                        <div className="droiteDivForm">
                            <form action="" ref={form} onSubmit={sendEmail} >
                                <div className="containform">
                                    <div className="divInp">
                                      <input className='inpdivInp' name='name' type="text" placeholder='Votre nom' required/>
                                    </div>
                                    <div className="divInp">
                                      <input className='inpdivInp' name='mail' type="mail" placeholder='votre mail' required/>
                                    </div>
                                    <div className="divInp">
                                       <textarea className='inpdivInp txtErea' name="message" id="" placeholder='votre Message' required></textarea>
                                    </div>
                                    <input className='btnSub' type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
         </div>
       </body>
       <footer>
          <div className="containtFooter">
             <div className="carteFoot">
                 <div className="aProp">
                     <span className='titApro'>A propos de moi</span>
                     <div className='divList'>Developpeur curieux et en constatnte evolution passionnes des solutions inovantes,je mets mon savoir-faire au service de projet ambitieux </div>
                     <div className="lsRs">
                         <a href=""><span className='circleSpan'><XIcon/></span></a> 
                         <a href=""><span className='circleSpan'><WhatsAppIcon/></span></a>
                         <a href=""><span className='circleSpan'><FacebookIcon/></span></a>
                         <a href=""><span className='circleSpan'><GitHubIcon/></span></a>
                         <a href=""><span className='circleSpan'><LinkedInIcon/></span></a>
                         <a href=""><span className='circleSpan'><InstagramIcon/></span></a>
                     </div>
                 </div>
                 <div className="aProp">
                     <span className='titApro'>Liens</span>
                     <div className='divList'>
                         <ul>
                            <li><ArrowRightAltIcon/> <a href=""><span>Acceuil</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>A propos</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>Services</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>Projets</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>Contact</span></a></li>
                         </ul>
                     </div>
                 </div>
                 <div className="aProp">
                     <span className='titApro'>Services</span>
                     <div className='divList'>
                         <ul>
                            <li><ArrowRightAltIcon/> <a href=""><span>Developpement web</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>web design</span></a></li>
                            <li><ArrowRightAltIcon/><a href=""><span>Data Analyst</span></a></li>
                            <li><ArrowRightAltIcon/> <a href=""><span>Analyste programmeur</span></a></li>
                         </ul>
                     </div>
                 </div>
                 <div className="aProp">
                     <span className='titApro'>Des questions?</span>
                     <div className='divList'>
                         <ul>
                            <li><LocationOnIcon/><a href=""> <span>Kinshasa,Limemte 7ieme rue Q/Industriel</span></a></li>
                            <li><PhoneIcon/><a href=""><span>+243 991301132</span></a></li>
                            <li><EmailIcon/><a href=""><span>exaudinhonyembwe@gmail.com</span></a></li>
                         </ul>
                     </div>
                 </div>
             </div>

          </div>
          <div className='copyR'>Copyright2024 Tout droit reserves | Graveur Inc.</div>
       </footer>
    </div>
  )
}

