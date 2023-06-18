import React from 'react'
import {useEffect,useState } from 'react';
import styles from 'sample/styles/Home.module.css'
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FluidGrid from 'react-fluid-grid'

import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import Image from 'next/image';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

var controls,controlshero,navopen=false;
var $ = require( "jquery" );
function index() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const notify = () =>{ 
   const elem1=document.getElementById("name");
   const elem2=document.getElementById("email");
   const elem3=document.getElementById("message");
   if(elem1.value.length*elem2.value.length*elem3.value.length>0){
    toast("Message Sent");
    elem1.value="";elem2.value="";elem3.value="";
   }
   else{
    alert("Please enter all credentials!");
   }
};

function sample(){
  alert("asd");
}

function closeoverlay(){
  const elem=document.getElementById("overlay");
  // elem.style.display="none";
  elem.style.opacity=0;
  elem.style.translate="0px -100vh";
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
         <link href='https://fonts.googleapis.com/css?family=Great Vibes' rel='stylesheet' />
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
        <ul>
          <li><Link href={'#hero'} className={styles.navlinks}>Home</Link></li>
          <li><Link href={'#gallery'} className={styles.navlinks}>Gallery</Link></li>
          <li><Link href={'#sculptings'} className={styles.navlinks}>Sculptings</Link></li>
          <li><Link href={'#prints'} className={styles.navlinks}>Prints</Link></li>
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
<Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 style={{"fontFamily":"Great Vibes"}}>SurajArts</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className={styles.mobul}>
          <li><Link href={'#hero'} onClick={handleClose} className={styles.hamlinks}>Home</Link></li>
          <li><Link href={'#gallery'} onClick={handleClose} className={styles.hamlinks}>Gallery</Link></li>
          <li><Link href={'#sculptings'} onClick={handleClose} className={styles.hamlinks}>Sculptings</Link></li>
          <li><Link href={'#prints'} onClick={handleClose} className={styles.hamlinks}>Prints</Link></li>
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
 <p style={{"fontWeight":"bold","scale":"1.2"}}>Paintings | Sculptures | Prints</p>
 <p><q>Every artist dips his brush in his own soul, and paints his own nature into his pictures.</q> - Henry Ward Beecher</p>
</div>
<div className={styles.modelcont}>
<Image className={styles.img} src={'/hands.png'} width={1000} height={1000} />
</div>

</section>
    <br/><br/>
        <section className={styles.workssection}>
        
          <div className={styles.worktypesdiv} id='gallery'>
          <h1  style={{"fontFamily":"Alegreya SC"}}>Gallery</h1>
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
         
          </FluidGrid>
          </div>
          <br/><br/> <br/><br/>
          <div className={styles.worktypesdiv} id='sculptings'>
          <h1  style={{"fontFamily":"Alegreya SC"}}>Sculptings</h1>
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
         
          </FluidGrid>
          </div>

          <br/><br/> <br/><br/>
          <div className={styles.worktypesdiv} id='prints'>
          <h1  style={{"fontFamily":"Alegreya SC"}}>Prints</h1>
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
         
          </FluidGrid>
          </div>
        

        </section>
    </div>
  )
}

export default index