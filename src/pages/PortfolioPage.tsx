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
import { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function PortfolioPage() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   };

    const [stateTheme,setStateTheme]=useState("noir")
    const changeTheme=()=>{
        if(stateTheme === 'noir'){
            setStateTheme('blanc') 
         }else{setStateTheme('noir')}
        }
    
  return (
    <div className={`PortfolioPage ${stateTheme} `}>
       <header>
          <div className={`containtHeader ${stateTheme}`}>
              <div className="lienRet">
                 <a href=""><span className='lBlz'>Exauce NY.</span></a>
              </div>
              <div className="navigLinks">
                 <ul>
                    <li><a href="secFirst"><span>Acceuil</span></a></li>
                    <li><a href="#secAprop"><span>A propos</span></a></li>
                    <li><a href="#secCvc"><span>Resume</span></a></li>
                    <li><a href="#secServic"><span>Services</span></a></li>
                    <li><a href="#secSkill"><span>Skills</span></a></li>
                    <li><a href="#secProject"><span>Projets</span></a></li>
                    <li><a href=""><span>Mon blog</span></a></li>
                    <li><a href="#secContac" ><span>Contact</span></a></li>
                    <li><button onClick={changeTheme} style={stateTheme === 'noir'? {backgroundColor:'black',color:'white'}: {backgroundColor:'white',color:'black'} } >  {stateTheme}</button></li>
                 </ul>
              </div>
          </div>
       </header>
       <body>
         <div className="containtBody">
            <section className="firts" id='secFirst' >
                <div className="containtFirts">
                  
                   <div className="pres1">
                       <div className="partGauche">
                          <div className="partgaucheContent">
                               <p className='h55'> {"<"}   <span className='balish5'>h5</span> {">"} <span className='enVertsite sizEnv'>Salut!</span> {"</"} <span className='balish5'>h5</span>  {">"}</p>
                              <p className='h11'> {"<"}<span className='balish5'>h1</span> {">"} <span className='wordd'>je suis <span className='enVertsite'>developpeur web</span>  base <br />  a Kinshasa</span> {"<"} <span className='balish5'>h1</span>  {"/>"} </p>
                             <div className="btss">
                                 <button className='bntac'> M'ecouter</button>
                                 <button className='bntac rf'>Mon travail</button>
                             </div>
                          </div>
                       </div>
                       <div className="partDroite">

                       </div>
                  </div>
                   <div className="pres1">
                  <div className="partGauche">
                     <div className="partgaucheContent">
                            <p className='h55'><span className='enVertsite sizEnv'>Salut!</span> </p>
                            <p className='h11'> {"<"}<span className='balish5'>h1</span> {">"} <span className='wordd'>je suis <span className='enVertsite'>Exauce <br />NYEMBWE </span></span> </p>
                            <div className="btss">
                                 <button className='bntac'> M'ecouter</button>
                                 <button className='bntac rf'>Mon travail</button>
                            </div>
                          </div>
                 </div>
                 <div className="partDroite">
                      <span>lmba lia</span>
                 </div>
                  </div>
                 
                </div>
            </section>
            <section className='secApropos' id='secAprop'>
                 <div className="contebtAprops">
                     <div className="drtt">
                        <img className='imgIam' src="" alt="" />
                     </div>
                     <div className="gchht">
                        <span className='titSect'>A propos</span>
                        <span className='soutTiSec'>A propos</span>
                        <span>fdfsdf sdfsd dfdsfsdfs dfsdfsdfds fsdfsdfs </span>
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
                        
                       <h4> <span className='spChif'>+ 32</span> Projects complets</h4>
                       <button className='btnDowl'>Telecharger le cv </button>
                     </div>
                </div>
            </section>
            {/**Section Resume */}
            <section className='secCv' id='secCvc'>
                <div className="containtResum">
                    <span className='titSect'>Mon cv</span>
                    <span className='soutTiSec'>Mon cv</span>
                    <span>Un cours resumer du contenu de mon cv demaontre ici par mon parcours d'etude et mes formations  </span>
                    <div className="divContent">
                        <div className="ligneCvrs">
                            <div className="bpss">
                               <div className="containBpss">
                                  <span className='aneee'>2034-5454</span>
                                  <span className='diplo'>Diplome d'etat </span>
                                  <span className='etabl'>College saint raphael</span>
                                  <span className='resudd'>L'une des grandes ecoles de prestige ans le savoir et l'exxcelence situer Kinsahsa,Limiet 1erer rue BP1800</span>
                               </div>
                           </div>
                           <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2034-5454</span>
                                  <span className='diplo'>Diplome d'etat </span>
                                  <span className='etabl'>College saint raphael</span>
                                  <span className='resudd'>L'une des grandes ecoles de prestige ans le savoir et l'exxcelence situer Kinsahsa,Limiet 1erer rue BP1800</span>
                               </div>
                            </div>
                        </div>
                        <div className="ligneCvrs">
                            <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2034-5454</span>
                                  <span className='diplo'>Diplome d'etat </span>
                                  <span className='etabl'>College saint raphael</span>
                                  <span className='resudd'>L'une des grandes ecoles de prestige ans le savoir et l'exxcelence situer Kinsahsa,Limiet 1erer rue BP1800</span>
                               </div>
                           </div>
                           <div className="bpss">
                              <div className="containBpss">
                                  <span className='aneee'>2034-5454</span>
                                  <span className='diplo'>Diplome d'etat </span>
                                  <span className='etabl'>College saint raphael</span>
                                  <span className='resudd'>L'une des grandes ecoles de prestige ans le savoir et l'exxcelence situer Kinsahsa,Limiet 1erer rue BP1800</span>
                               </div>
                            </div>
                        </div>
                        
                    </div>
                    <button className='btnCV'>Telecharger cv</button>
                </div>
            </section>
            <section className='secService' id='secServic'>
                <div className="containtServ">
                    <span className='titSect'>Services</span>
                    <span className='soutTiSec'>Services</span>
                    <span>Mes services dans les actisn coyurantes</span>
                    <div className="contentBoxSev">
                         <div className="lignebox">
                             <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr className='SteticLign' />
                             </div>
                             <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr  className='SteticLign'/>
                             </div>
                             <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr className='SteticLign' />
                             </div>
                         </div>
                         <div className="lignebox">
                              <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr className='SteticLign'/>
                             </div>
                             <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr className='SteticLign' />
                             </div>
                             <div className="boxServ">
                                 <img src="" alt="" />
                                 <span>Web design</span>
                                 <hr className='SteticLign'/>
                             </div>
                         </div>
                    </div>
                </div>
            </section>
            <section className='secSkil' id='secSkill'>
               <div className="containtSkill">
                     <span className='titSect'>Mes skills</span>
                     <span className='soutTiSec'>Skills</span>
                     <span className='descriC'>Toute mon experience partagee en une section</span>
                     <div className="contentSkill">
                         <div className="divSkill2">
                            <div className="barskilContent">
                                <div className="topBarSkil"><span>Javascript</span> <span>85%</span> </div>
                                <div className="bottombarSkill"> <span className='Javascript'></span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil"><span>Typescript</span> <span>90%</span> </div>
                               <div className="bottombarSkill"> <span className='Typescript'></span> </div>
                           </div>
                         </div>
                         <div className="divSkill2">
                            <div className="barskilContent">
                                <div className="topBarSkil"><span>Figma</span> <span>90%</span> </div>
                                <div className="bottombarSkill"> <span className='Figma'></span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil"><span>WordPress</span><span>90%</span> </div>
                               <div className="bottombarSkill"> <span className='WordPress'></span> </div>
                           </div>
                         </div>
                         <div className="divSkill2">
                            <div className="barskilContent">
                                <div className="topBarSkil"><span>Css</span> <span>87%</span> </div>
                                <div className="bottombarSkill"> <span className='Css'></span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil"><span>Html</span> <span>90%</span> </div>
                               <div className="bottombarSkill"> <span className='Html'></span> </div>
                           </div>
                         </div>
                         <div className="divSkill2">
                            <div className="barskilContent">
                                <div className="topBarSkil"><span>NestJS</span> <span>90%</span> </div>
                                <div className="bottombarSkill"> <span className='NestJS'></span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil"><span>NodeJS</span> <span>80%</span> </div>
                               <div className="bottombarSkill"> <span className='NodeJS'></span> </div>
                           </div>
                         </div>
                         <div className="divSkill2">
                            <div className="barskilContent">
                                <div className="topBarSkil"><span>PrismaClient</span> <span >90%</span> </div>
                                <div className="bottombarSkill"> <span className='PrismaClient'></span> </div>
                            </div>
                            <div className="barskilContent">
                               <div className="topBarSkil"><span>PostgreSql</span> <span>90%</span> </div>
                               <div className="bottombarSkill"> <span className='PostgreSql'></span> </div>
                           </div>
                         </div>
                     </div>
                </div>  
            </section>
            <section className='secProjet' id='secProject'>
                <div className="contentProjet">
                    <span className='titSect'>Nos projets</span>
                    <span className='soutTiSec'>Projets</span>
                    <span className='descriC'>Des liens vers nos projets realises</span>
                    <div className="projetcContaint">
                        <div className="caseBox">
                           <div className="divProj1 hopp">
                               <img src="" alt="" />
                               <span className='wdHidd'> <a href="">Web design et developpement</a></span>
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
                                <span className='wdHidd'>Agence de voyage El-Celha</span>
                            </div>
                           <div className="divProj1 hopp">
                               <span> ... autres</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section> {/**Blog ?? */}</section>

            <section className='evaluation' id='secEval'>{/**Evalation */}
                <div className="containtEvalution">
                    <div className="Stats">
                        <div className="boxStat">
                            <span className='numberStat'>10</span>
                            <span>Trophes</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'>68</span>
                            <span>Projets complet</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'>90 </span>
                            <span>clients satisfaits</span>
                        </div>
                        <div className="boxStat">
                            <span className='numberStat'>354</span>
                            <span>Tasses de cafe</span>
                        </div>
                    </div>
                    <span className='declaFreelancing'>Je suis <span className='wordDispo'>disponible</span>  pour du freelancing</span>
                    <span className='phrasesCles'>Passionne par le deveopement web,je mets a profit mon savoir et ma creativite pour relever les defis et inover constaments. <br />
                    Mon parcours diversifier temoigne de ma capacite a m'adapeter rapidemnt et exceller dans des environemnt dynamioques</span>
                    <button className='btnEmbu'>Embauche-moi</button>
                </div>
            </section>

            <section className='secContact' id='secContac'>
                <div className="containtContact">
                    <span className='titSect'>Contactez moi</span>
                    <span className='soutTiSec'>Contact</span>
                    <span className='descriC'>Mon adresse,mon numeo de telephone,mon mail,tout pour vous infomer de moi</span>
                    <div className="cartesAdressContent">
                        <div className="carteAdress">
                            <span className="svgImg"><PinDropIcon className='cvg'/></span>
                            <span>ADRESSE</span>
                            <span>Kinshasa,Limete 7ieme rue Q/Industriel </span>
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
                        <div className="gaucheDivFomr"><img src="" alt="" /></div>
                        <div className="droiteDivForm">
                            <form action="">
                                <div className="containform">
                                    <div className="divInp">
                                      <input className='inpdivInp' type="text"/>
                                      <div className="divLabel">Entrer votre nom</div>
                                    </div>
                                    <div className="divInp">
                                      <input className='inpdivInp' type="text" />
                                      <div className="divLabel">Entrer votre mail</div>
                                    </div>
                                    <div className="divInp">
                                      <input className='inpdivInp' type="text" />
                                      <div className="divLabel">Entrer votre sujet</div>
                                    </div>
                                    <div className="divInp">
                                        <textarea className='inpdivInp' name="" id=""></textarea>
                                      <div className="divLabel messa">Entrer votre Message</div>
                                    </div>
                                    <input type="submit" />
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

