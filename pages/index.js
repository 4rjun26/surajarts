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

  useEffect(()=>{
    showimages();
  }, []);

function showhands(){
  var arr=document.getElementsByClassName('Home_handcont__1QkXD');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="block";
  }
  var arr=document.getElementsByClassName('Home_imagecont__qtHNS');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  arr=document.getElementById('hand');
  arr.style.color="black";
  arr.style.textDecoration="underline";
  arr=document.getElementById('gal');
  arr.style.color="gray";
  arr.style.textDecoration="none";
  handleClose();
}
function showimages(){
  var arr=document.getElementsByClassName('Home_handcont__1QkXD');
  for(let i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
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
          <li><Link href={'#gallery'} onClick={showimages} className={styles.navlinks}>Gallery</Link></li>
          <li><Link href={'#gallery'} onClick={showhands} className={styles.navlinks}>Handscapes</Link></li>
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
          <Offcanvas.Title><h1 style={{"fontFamily":"Great Vibes"}}>SurajArts</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className={styles.mobul}>
          <li><Link href={'#hero'} onClick={handleClose} className={styles.hamlinks}>Home</Link></li>
          <li><Link href={'#gallery'} onClick={showimages} className={styles.hamlinks}>Gallery</Link></li>
          <li><Link href={'#gallery'} onClick={showhands} className={styles.hamlinks}>Handscapes</Link></li>
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
 <p style={{"fontWeight":"bold","scale":"1.2"}}>Paintings | Sculptures</p>
 <p><q>Every artist dips his brush in his own soul, and paints his own nature into his pictures.</q> - Henry Ward Beecher</p>
</div>
<div className={styles.modelcont}>
<Image className={styles.img} src={'/sample.jpg'} width={1000} height={1000} />
</div>

</section>
    <br/><br/>
        <section className={styles.workssection}>
        
          <div className={styles.worktypesdiv} id='gallery'>
          <div className={styles.tabsdiv}>
          <button onClick={showimages} id='gal'>Gallery</button>
          <button onClick={showhands} id='hand'>Handscapes</button>
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
         
        {/* Handscapes */}
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand1.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand2.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand3.png'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand4.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand5.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand6.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand7.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand8.jpg'} width={'1000'} height={'1000'} alt='imp' />
          </div>
          <div className={styles.handcont}>
          <Image className={styles.contentimg} src={'/hand9.png'} width={'1000'} height={'1000'} alt='imp' />
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