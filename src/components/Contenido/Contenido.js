import React from 'react';
import ramo21  from './ramo21.jpg';
import text777  from './text777.jpg';
import planta1  from './planta1.jpg';
import complementos  from './complementos.jpg';
import mesa2 from  './mesa2.png';
import rosas from './rosas.jpeg';
import './Contenido.css';


const Contenido = () => {
return (

<section className="ph3 ph5-ns pv5">
  <article className=" ">
    <div className="flex items-center justify-center flex-wrap-reverse pa4 mb6 ">

      <div className="w-200 pr3-ns mb4 mb0-ns  w-40-ns mb3">
        <img src={ramo21} className="db " alt=" of a dimly lit room with a computer interface terminal."/>
      </div>

      <div className="w-100 w-60-ns pl3-ns tc">
        <h1 className="f2 fw1  mt0 lh-title">NOSOTROS</h1>
        <p className="f3  lh-copy tc black ">
          Creemos que la experiencia de elegir el regalo ideal a nuestra persona querida seria mejor si agregamos nuevas opciones a las existentes
          para facilitar la eleccion y entrega generando momentos de feliciadad inolvidables, unicos con plantas y arreglos florales exclusivos, personalizados..
        </p>
        <div className="ph3 pa3 tc">
          <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 ph4 mh2 br-pill ba b--black-20 black pa2" href="https://wa.me/51948018337?text=Hola%2C+Yamheru%2C+Estoy+interesado+en+sus+SERVICIOS">Contáctanos</a>
        </div>
      </div>

    </div>

</article>


<div className="flex flex-column justify-center">


  <div className=" pa3 pa4-ns dtc-ns v-mid tc">
    <h1 className="fw1  mt0 mb3">SERVICIOS</h1>
    <p className="f3 black lh-copy mv0 ">
      Siguenos en nuestras redes sociales y revisa nuestras promociones que tenemos este mes para ti!!!.
    </p>
  </div>
  <div className="pa3 pa4-ns dtc-ns v-mid tc">
    <a className="link near-black hover-silver dib h2 w2 mr3 mh3" href="https://facebook.com/yamheru" title='Facebook'>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
    </a>
    <a className="link hover-silver near-black dib h2 w2 mr3 mh3" href="https://instagram.com/yamheru" title="Instagram">
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
    </a>
  </div>
</div>


<div className="flex flex-wrap items-center br3">

  <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={text777} className="db w-100 br2 br--top" alt="Producto Ramos"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc tc ">
          <h1 className="f5 f4-ns mv0">ARREGLOS FLORALES</h1>
        </div>

      </div>
      <p className="f6 lh-copy measure mt2 black tc">
        Ramos, Boxes, Centros de Mesa, Floreros. Arreglos personalizados.
      </p>
      <div className=" pa3 tc">
        <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 mh2 br-pill ba b--black-20 black pa2" href="./CatalogoMarzo.pdf">CATALOGO</a>
      </div>
    </div>
  </div>

  <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={rosas} className="db w-100 br2 br--top" alt="Producto Ramos"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc tc ">
          <h1 className="f5 f4-ns mv0">CORPORATIVOS</h1>
        </div>

      </div>
      <p className="f6 lh-copy measure mt2 black tc">
        Te ayudamos a brindar soluciones corporativas. Contáctanos.
      </p>
      <div className="ph3 pa3 tc">
        <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 mh2 br-pill ba b--black-20 black pa2" href="https://wa.me/51948018337?text=Hola%2C+Yamheru%2C+Estoy+interesado+en+el+servcio+CORPORATIVOS">CONTACTANOS</a>
      </div>
    </div>
  </div>

  <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={planta1} className="db w-100 br2 br--top" alt="Producto Plantas"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc tc ">
          <h1 className="f5 f4-ns mv0">PLANTAS</h1>
        </div>

      </div>
      <p className="f6 lh-copy measure mt2 black tc">
        Orquideas, Bambus, Suculentas. Para mas informacion Contáctanos.
      </p>
      <div className="ph3 pa3 tc">
        <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 mh2 br-pill ba b--black-20 black pa2" href="https://wa.me/51948018337?text=Hola%2C+Yamheru%2C+Estoy+interesado+en+el+servicio+PLANTAS">CONTACTANOS</a>
      </div>
    </div>
  </div>

  <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={complementos} className="db w-100 br2 br--top" alt="Producto Ramos"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc tc ">
          <h1 className="f5 f4-ns mv0">COMPLEMENTOS</h1>
        </div>

      </div>
      <p className="f6 lh-copy measure mt2 black tc">
        Tenemos globos, peluches, chocolates y tarjetas dedicatorias.
      </p>
      <div className="ph3 pa3 tc">
        <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 mh2 br-pill ba b--black-20 black pa2" href="./CatalogoMarzo.pdf">CATALOGO</a>
      </div>
    </div>
  </div>

  <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src={mesa2} className="db w-100 br2 br--top" alt="Producto Ramos"/>
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc tc ">
          <h1 className="f5 f4-ns mv0">SUBSCRIPCION</h1>
        </div>

      </div>
      <p className="f6 lh-copy measure mt2 black tc">
        Deseas recibir flores cada semana a tu casa. Subscribete.
      </p>

      <div className="ph3 pa3 tc">
        <a className="f4 dib  bg-animate hover-bg-black hover-white no-underline pv2 mh2 br-pill ba b--black-20 black pa2" href="https://wa.me/51948018337?text=Hola%2C+Yamheru%2C+Estoy+interesado+en+SUBSCRIPCION">CONTACTANOS</a>
      </div>

    </div>
  </div>

</div>

</section>


);
}

export default Contenido;
