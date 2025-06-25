import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="contact-div">
        <div className="contact-map">
          <iframe className="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.008575643768!2d-117.92154912424449!3d33.81209177324842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sin!4v1749910450059!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="contact-form-div">
          <h2 className="contact-form-heading"> Contact Us </h2>
          <form className="contact-form bg-light" action="https://formspree.io/f/manjjnvb" method="POST">
            <input className="contact-form-input" type="text" placeholder="Full Name*" name="Name" autoComplete="off" required />
            <input className="contact-form-input" type="text" placeholder="Phone Number*" name="Phone" autoComplete="off" required />
            <input className="contact-form-input" type="email" placeholder="Email Address*" name="Email" autoComplete="off" required />
            <input className="contact-form-input" type="text" placeholder="Pincode*" name="Pincode" autoComplete="off" required />
            <input className="contact-form-input" style={{ width: "100%" }} type="text" placeholder="Subject*" name="subject" autoComplete="off" required />
            <textarea className="contact-form-input" style={{ width: "100%", height: "100px" }} name="Message" placeholder="write a message..." autoComplete="off" required ></textarea>
            <button style={{ width: "100%" }} className="btn btn-warning"> Submit request </button>
          </form>
        </div>
      </div>
      <div className="contact-info-container bg-light">
        <div className="contact-info-cards">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="phone" >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
          </svg>
          <b> Phone</b> <br /> +91-33-22811396/97
        </div>
        <div className="contact-info-cards">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"id="email" >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
          </svg>{" "}
          &nbsp;
          <b>Email us</b> <br /> info@umaexports.net.in
        </div>
        <div className="contact-info-cards">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="fax-machine" >
            <g>
              <path fill="#9f85ec" d="M27,10H13a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1V9A1,1,0,0,1,27,10ZM14,8H26V2H14Z" ></path>
              <path fill="#38004d" d="M7,32H3a3,3,0,0,1-3-3V9A3,3,0,0,1,3,6H7a3,3,0,0,1,3,3V29A3,3,0,0,1,7,32ZM3,8A1,1,0,0,0,2,9V29a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V9A1,1,0,0,0,7,8Z" ></path>
              <path fill="#38004d" d="M30,30H13a1,1,0,0,1,0-2H30V10H10V29a1,1,0,0,1-2,0V9A1,1,0,0,1,9,8H30a2,2,0,0,1,2,2V28A2,2,0,0,1,30,30Z" ></path>
              <path fill="#38004d" d="M25 18H15a1 1 0 01-1-1V13a1 1 0 011-1H25a1 1 0 011 1v4A1 1 0 0125 18zm-9-2h8V14H16zM16 22a1 1 0 111-1A1 1 0 0116 22zM20 22a1 1 0 111-1A1 1 0 0120 22zM24 22a1 1 0 111-1A1 1 0 0124 22zM16 26a1 1 0 111-1A1 1 0 0116 26zM20 26a1 1 0 111-1A1 1 0 0120 26zM24 26a1 1 0 111-1A1 1 0 0124 26z" ></path>
              <path fill="#9f85ec" d="M22,6H18a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" ></path>
            </g>
          </svg>
          &nbsp;
          <b> Fax</b> <br /> +91-33-22813480
        </div>
        <div className="contact-info-cards">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="location" >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
          </svg>
          <b> Address</b> <br /> Uma Exports Limited <br /> Suite No.-16 <br />
          1st Floor <br /> Ganga Jamuna Building, <br /> 28/1 Shakespeare
          Sarani, <br /> Kolkata - 700 017
        </div>
      </div>
    </div>
  );
}
