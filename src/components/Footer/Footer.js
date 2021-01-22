import React from 'react';
import whatsup from './whatsup.png';

const Footer = () => {
return (



<footer className="pa4 pa5-l black ">

  <div className="flex flex-wrap mb4-l cf">
    <h1 className="fl w-100 pv0 f3 ttu tracked mb4">Contacto</h1>
    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 className="f5 f4-l fw6">Redes Sociales</h4>

    <a className="link near-black hover-silver dib mh tc" href="https://facebook.com/yamheru" title="Facebook">
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
          <span className="f6 db">Facebook</span>
        </a>
    <a className="link hover-silver near-black dib mh3 tc" href="https://instagram.com/yamheru" title="Instagram">
        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
        <span className="f6 db">Instagram</span>
      </a>
      <a href="https://api.whatsapp.com/send?phone=948018337" className="link hover-silver near-black dib tc link dim dib black-70">
        <img style={{paddingTop: '5px'}} alt='logo' className="dib w2 h2 br2 br--top " src={whatsup}/>
        <span className="f6 db">Whatsup</span>
      </a>
    </article>

    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
      <h4 className="f5 f4-l fw6">Telefonos</h4>
      <a href="tel:+13235555555" className="f6 db fw6 pv2 link dim black-70" title="Call Lima office.">
        +51-948018337
      </a>
      <a href="tel:+13235555555" className="f6 db fw6 pv2 link dim black-70" title="Call Lima office.">
        +51-997502031
      </a>
    </article>
    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 className="f5 f4-l fw6">Correos</h4>
      <a href="mailto:informacion@yamheru.com" className="f6 db fw6 pv2 link dim black-70" title="Mail office.">informacion@yamheru.com</a>
      <a href="mailto:yamheru.floral@gmail.com" className="f6 db fw6 pv2 link dim black-70" title="Mail office." >yamheru.floral@gmail.com</a>
    </article>
    <article className="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
      <h4 className="f5 f4-l fw6">Direccion</h4>

					<a href="https://www.google.ca/maps/place/1087+Bathurst+St,+Toronto,+ON+M5R+3G8/@43.6728221,-79.4162866,17z/data=!3m1!4b1!4m5!3m4!1s0x882b349acd3670bb:0x27e49690a1d99388!8m2!3d43.6728221!4d-79.4140979" >
          <span className="f7 f6-l db black-70" title="Call Lima office.">La Molina, Rotonda 158 2do piso </span>
					</a>

    </article>
  </div>


  <div className="dt dt--fixed w-100" >
    <div className="dn dtc-ns v-mid">
      <p className="f7 black-70 dib pr3 mb3">
        Copyright © Yamheru 2019
      </p>
    </div>
  </div>


</footer>

)
};

export default Footer;
