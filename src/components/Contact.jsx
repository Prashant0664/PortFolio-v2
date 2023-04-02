import React from 'react'
import { FaBeer, FaInstagram, FaGithub,FaLinkedin , FaMailchimp,  } from 'react-icons/fa';
import './css.css';
import toast, { Toaster } from 'react-hot-toast';
const rootUrl = 'https://mail-senderv1api.onrender.com';
var About_Me = [
  {
    Location_map: [
      {
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223994.25250226617!2d76.94804665529392!3d28.692332876507237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1661751462175!5m2!1sen!2sin"
      },
      {
        Message: "SEND MESSAGE"
      }
    ]
  }
]
export default function Contact() {
  const [data, setName] = React.useState({
    name: "",
    gmail: "",
    content: "",
    subject: "---------",
    phone: "000000000",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    if (!data.name || !data.gmail || !data.content) {
      const notify = () => toast('PLEASE FILL ALL REQUIRED CREDENTIALS');
      notify();
      return
    };

    try {
      const url = `${rootUrl}/api/v1/report`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const notify = () => toast('MAIL SENT SUCCESSFULLY');
      notify();
    } catch (error) {
      const notify = () => toast(error);
      notify();
      console.log(error);
    }
  };
  const isActive = false;
  // console.log(data);
  return (
    <>
        <h3 className="works-m3" id="contact">Contact Form</h3>
    <div className='contact-sectionb'>
      
      <section className="contact-form">


        <form  className="form" onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" 
            value={data.name}
            onChange={(e) => { setName(ev => ({ ...ev, name: e.target.value })) }}/>

            <input type="email" name="email" className="form-input" value={data.gmail}
              placeholder='Enter Your Gmail...'
              onChange={(e) => { setName(ev => ({ ...ev, gmail: e.target.value })) }}/>
          </div>

          <textarea name="message" className="form-input" value={data.content}
              placeholder='TYPE YOUR MESSAGE HERE...'
              onChange={(e) => { setName(ev => ({ ...ev, content: e.target.value })) }} ></textarea>

          <button className="form-btn" type="submit">
            <ion-icon name="paper-plane" onClick={handleSubmit}></ion-icon>
            {About_Me[0].Location_map[1].Message}
             
          </button>

        </form>
        
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid brown',
              padding: '16px',
              color: 'green',
              borderShadow: '1rem 1rem red',
              textAlign: "center"
            },
          }}
        />
      </section>
      <article className=''>
        {/* <h2 className="h2 article-title active">Contact</h2> */}
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe src={About_Me[0].Location_map[0].Location}
              width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </figure>
        </section>
      </article>

    </div>
    <div className="footer">
    <div className="footer-2">
      {/* <BsInstagram /> */}
      <a href="https://www.linkedin.com/in/prashant-693591228/" className='cbl1'><h1><FaInstagram /></h1></a>
      <a href="https://www.github.com/prashant0664"className='cbl1'><h1><FaGithub /></h1></a>
      <a href="https://www.linkedin.com/in/prashant-693591228/"className='cbl1'><h1><FaLinkedin /></h1></a>
    </div>
  </div>
    </>
  )
}