import React from 'react'
import {useEffect,useState } from 'react';
import styles from 'sample/styles/Home.module.css'
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FluidGrid from 'react-fluid-grid'
import ReactReadMoreReadLess from "react-read-more-read-less";
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Accordion from 'react-bootstrap/Accordion';
import Collapse from 'react-bootstrap/Collapse';
import { Tabs,Tab} from 'react-bootstrap'; 
import Image from 'next/image';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

var controls,controlshero,navopen=false;
var $ = require( "jquery" );
function index() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    showPics("gal");
  }, []);


function showimages(){
  var arr=document.getElementsByClassName('Home_handcont__1QkXD');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  // Home_awacont__MpLIr
  var arr=document.getElementsByClassName('Home_imagecont__qtHNS');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="block";
  }

  arr=document.getElementById('gal');
  arr.style.color="black";
  arr.style.textDecoration="underline";
  arr=document.getElementById('hand');
  arr.style.color="gray";
  arr.style.textDecoration="none";

  handleClose();
}

function showPics(ind){
  // making all nones;
  var x;
  var arr=document.getElementsByClassName('Home_handcont__1QkXD');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  arr=document.getElementsByClassName('Home_imagecont__qtHNS');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  arr=document.getElementsByClassName('Home_awacont__MpLIr');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  arr=document.getElementsByClassName('Home_ordcont__GOnH5');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }

  x=document.getElementById('gal');
  x.style.color="gray";
  x.style.textDecoration="none";
  x=document.getElementById('hand');
  x.style.color="gray";
  x.style.textDecoration="none";
  x=document.getElementById('awa');
  x.style.color="gray";
  x.style.textDecoration="none";
  x=document.getElementById('ord');
  x.style.color="gray";
  x.style.textDecoration="none";

  if(ind==="gal"){
    // Home_awacont__MpLIr
    var arr=document.getElementsByClassName('Home_imagecont__qtHNS');
    for(let i=0;i<arr.length;i++){
      arr[i].style.display="block";
    }

    x=document.getElementById('gal');
  x.style.color="black";
  x.style.textDecoration="underline";
  }
  else if(ind==="exe"){
    var arr=document.getElementsByClassName('Home_handcont__1QkXD');
    for(let i=0;i<arr.length;i++){
      arr[i].style.display="block";
    }

    x=document.getElementById('hand');
  x.style.color="black";
  x.style.textDecoration="underline";
  }
  else if(ind==="awa"){
    var arr=document.getElementsByClassName('Home_awacont__MpLIr');
    for(let i=0;i<arr.length;i++){
      arr[i].style.display="block";
    }

    x=document.getElementById('awa');
  x.style.color="black";
  x.style.textDecoration="underline";
  }
  else if(ind==="ord"){
var arr=document.getElementsByClassName('Home_ordcont__GOnH5');
for(let i=0;i<arr.length;i++){
  arr[i].style.display="block";
}

x=document.getElementById('ord');
x.style.color="black";
x.style.textDecoration="underline";
  }


  handleClose();
}


  
function copytoclipboard(){
  var copyText = document.getElementById("codearea");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  toast("Copied to clipboard.");
}



  if (typeof window !== "undefined") {
    // $(document).ready(function(){
    //   $(".Home_imagecont__qtHNS").hover(function(){
    //     $(this).find(".Home_contentimg__fDLDI").css({"opacity":"0.5"});
    //     }, function(){
    //     $(this).find(".Home_contentimg__fDLDI").css({"opacity":"1"});
    //   });
    // });

    $.fn.isInViewport = function() {
      if($(this).offset()!=undefined){
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
  
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
  
      return elementBottom > viewportTop && elementTop < viewportBottom;
      }
    };

    $(window).on('resize scroll', function() {
      if ($('#about').isInViewport()) {
        $('#about .Home_abtcard__pckKN').css({"opacity":"1"});
      } else {
        $('#about .Home_abtcard__pckKN').css({"opacity":"0"});
      }
      if ($('#contactus').isInViewport()) {
        $('#contactus').css({"opacity":"1"});
      } else {
        $('#contactus').css({"opacity":"0"});
      }
      if ($('#hero').isInViewport()) {
        $('#hero').css({"opacity":"1"});
      } else {
        $('#hero').css({"opacity":"0"});
      }
      if ($('#works').isInViewport()) {
        $('#works').css({"opacity":"1"});
      } else {
        $('#works').css({"opacity":"0"});
      }
  });
}

  return (
    <div className={styles.body} style={{"width":"100vw"}}>

         <Head>
         <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
         <link href='https://fonts.googleapis.com/css?family=Corinthia' rel='stylesheet' />
         <link href='https://fonts.googleapis.com/css?family=PT Sans Narrow' rel='stylesheet' />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js" />
     </Head>
     <ToastContainer 
   position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        />
   
       <div className={styles.desktopnav} id='desktopnav'>
        <Image style={{"position":"absolute"}} src={'/logo.png'} width={150} height={75} alt='logo'></Image>
        <ul>
          {/* <li><Link href={'#hero'} className={styles.navlinks}>Home</Link></li> */}
          <li><Link href={'#hero'} className={styles.navlinks}>About Me</Link></li>
          <li><Link href={'#hero'} className={styles.navlinks}>Painting Style</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("gal")}} className={styles.navlinks}>Gallery</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("exe")}} className={styles.navlinks}>Exhibitons</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("awa")}} className={styles.navlinks}>Awards</Link></li>
        </ul>
        <div className={styles.linkscont}>
        <button onClick={handleClose}><AiFillInstagram/></button>
        <button onClick={handleClose}><AiFillFacebook/></button>
        <button onClick={handleClose}><AiFillLinkedin/></button>
        </div>

      </div>
      <div className={styles.mobnav}>
        <button onClick={handleShow}><RxHamburgerMenu/></button>
      </div>
     
    
{/* Hero section */}
<Offcanvas style={{"height":"100vh","background":"whitesmoke"}} show={show} onHide={handleClose} scroll={'true'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Image style={{"position":"absolute","top":"-10px"}}  src={'/logo.png'} width={200} height={100} alt='logo'></Image>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className={styles.mobul}>
          <li><Link href={'#hero'} onClick={handleClose} className={styles.hamlinks}>Home</Link></li>
          <li><Link href={'#about'} onClick={handleClose} className={styles.hamlinks}>About</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("gal")}} className={styles.hamlinks}>Gallery</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("exe")}} className={styles.hamlinks}>Exhibitons</Link></li>
          <li><Link href={'#gallery'} onClick={()=>{showPics("awa")}} className={styles.hamlinks}>Awards</Link></li>
        </ul>
        <div className={styles.socialcont}>
        <button onClick={handleClose}><AiFillInstagram/></button>
        <button onClick={handleClose}><AiFillFacebook/></button>
        <button onClick={handleClose}><AiFillLinkedin/></button>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
<section className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>

<div className={styles.namecont}>
  <h1>SurajArts</h1>
 <p style={{"fontWeight":"bold","scale":"1.2"}}>Artist</p>
 {/* <p><q>Every artist dips his brush in his own soul, and paints his own nature into his pictures.</q> - Henry Ward Beecher</p> */}
</div>
<div className={styles.modelcont}>
<Image className={styles.img} src={'/sample1.jpeg'} width={1000} height={1000} />
</div>

</section>
    <section id='about' className={styles.aboutsection}>
      <div className={styles.aboutcont}>
      
          <h1>About Me</h1>
          <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"More"}
                readLessText={"Less"}
                readMoreStyle={{"fontWeight":"bold","cursor":"pointer"}}
                readLessStyle={{"fontWeight":"bold","cursor":"pointer"}}
            >
                    I am Suraj P Howale, a renowned artist known for my hyper-realistic portraiture. With a deep passion for drawing since childhood, I have dedicated the past decade to honing my skills and achieving excellence in my craft. Specializing in the subject of Indian Sadhus, I find profound satisfaction in capturing intricate details, from their facial features to the nuances of their drapery. By selecting this subject, I aim to keep Indian culture alive and promote it on a global stage. With numerous national and international awards to my name, my colored pencil masterpieces bring these captivating portraits to life, evoking a sense of awe and reverence.
            </ReactReadMoreReadLess>
   
        </div>
        <br /><br />
        <div className={styles.aboutcont}>
      
          <h1>Painting Style</h1>
          <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"More"}
                readLessText={"Less"}
                readMoreStyle={{"fontWeight":"bold","cursor":"pointer"}}
                readLessStyle={{"fontWeight":"bold","cursor":"pointer"}}
            >
          Indian Sadhus, Portraits, Landscapes               
            </ReactReadMoreReadLess>
   
        </div>
    </section>
        <section className={styles.workssection}>
        
          <div className={styles.worktypesdiv} id='gallery'>
          <div className={styles.tabsdiv}>
          <button onClick={()=>{showPics('gal')}} id='gal'>Gallery</button>
          <button onClick={()=>{showPics('exe')}} id='hand'>Exhibitons</button>
          <button onClick={()=>{showPics('awa')}} id='awa'>Awards</button>
          <button onClick={()=>{showPics('ord')}} id='ord'>Orders</button>
          
          </div>
        <FluidGrid
        transition={'top 100ms ease-in-out, left 100ms ease-in-out'}
        >
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art1.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art2.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art3.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art4.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art5.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art6.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art7.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art8.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art9.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.imagecont}>
          <Image className={styles.contentimg} src={'/art10.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
         
        {/* Exibitons */}
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe1.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe2.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe3.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe4.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe5.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe6.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe7.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe8.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe9.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe10.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe11.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe12.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe13.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe14.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe15.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe16.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe17.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe18.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe19.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe20.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe21.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe22.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe23.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe24.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe25.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/exe26.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>

        {/* Awards */}
        <div className={styles.awacont}>
          <Image className={styles.contentimg} src={'/awa1.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.awacont}>
          <Image className={styles.contentimg} src={'/awa2.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.awacont}>
          <Image className={styles.contentimg} src={'/awa3.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.awacont}>
          <Image className={styles.contentimg} src={'/awa4.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.awacont}>
          <Image className={styles.contentimg} src={'/awa5.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>

        {/* Orders */}
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord1.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord2.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord3.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord4.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord5.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord6.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord7.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord8.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord9.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord10.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord11.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord12.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord13.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord14.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord15.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord16.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord17.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord18.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord19.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord20.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord21.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord22.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord23.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord24.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord25.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord26.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord27.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord28.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.ordcont}>
          <Image className={styles.contentimg} src={'/ord29.jpeg'} width={'1000'} height={'1000'} alt='imp' />
          </div>


          </FluidGrid>
          </div>
          <br/><br/> 
          <div className={styles.contact}>
            <p>surajphowale03@gmail.com | 9665070303</p>
          </div>

        </section>
    </div>
  )
}

export default index