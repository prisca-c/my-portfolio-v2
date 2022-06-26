import React from "react";
import { Container } from 'react-bootstrap';

function Hero() {


    return (

      <Container fluid id='hero' className='ps-3 pe-3'>

        <div>
          <img src="./assets/img/Profile.png" alt="Profile" className='img-fluid' />
        </div>

        <div id='hero-info' className="text-gray">

          <h1 className='roboto-slab fw-bold'>
              Prisca
              <br />
              CASTANIER
            <span id='hero-recherche'>
              <br /> <span className="text-white"> À la recherche d'une alternance</span>
              <br /> &#60; Développeur web &#38; mobile /&#62;
            </span> .
          </h1>
    
          <p className="text-gray roboto">
            Étudiante de 24 ans située autour de Caen, passionnée par tout ce qui touche
            qu domaine de l'informatique et plus partclièrement par la création digitale.
          </p>

          <div id='hero-contact' className='d-flex flex-row justify-content-between align-items-center  roboto'>
            <div>
              <img src="./assets/img/linkedin.png" alt="Logo Linkedin" />
              <img src="./assets/img/instagram.png" alt="Logo Instagram" />
            </div>

            <div className='d-flex flex-row align-items-center'>
              <p className='m-auto me-2'>
                Besoin d'une alternante ?
                <br /> Contactez moi ! 
              </p>
              
              <img src="./assets/img/Mail.png" alt="" />
            </div>
          </div>

        </div>

      </Container>
      
    )
  }

  export default Hero;