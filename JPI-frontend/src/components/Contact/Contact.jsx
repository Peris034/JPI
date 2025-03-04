import React from 'react';
import './Contact.css';
import mapImg from '../../assets/map-one.png';

const Contact = () => {
  const contacts = [
    {
      title: "Jay Parivartan India Marketing Pvt Ltd",
      address: "1012, Palladium Mall, Yogichowk to Kiran Chowk Road, Yogichowk, Surat, Gujarat, India",
      phone: "+91 9998826273",
      email: "shailesh.t.boghara@gmail.com",
      workingHours: [
        "Everyday: 09:00 AM - 11:00 PM",
      ]
    },
    {
      title: "Shaileshbhai Trikambhai Boghara",
      address: "1012, Palladium Mall, Yogichowk to Kiran Chowk Road, Yogichowk, Surat, Gujarat, India",
      phone: "+91 9998826273",
      email: "Shailesh.t.boghara@gmail.com",
      workingHours: [
        "Everyday: 09:00 AM - 01:00 PM",
      ]
    }
  ];

  return (
    <section id="contact" className="contact-wrapper">
      <h2 className="sec-ttl">Contact Details</h2>

      {contacts.map((contact, index) => (
        <div className="contact-block" key={index}>
          {/* Map Column */}
          <div className="contact-map">
            <img src={mapImg} alt="Map" loading="lazy" />
          </div>

          {/* Contact Details Column */}
          <div className="contact-details">
            <h3 className="contact-title">{contact.title}</h3>
            <p className="contact-address">{contact.address}</p>
            <div className="contact-info">
              <div><i className="fa-solid fa-phone"></i><a href={`tel:${contact.phone}`}>{contact.phone}</a></div>
              <div><i className="fa-regular fa-envelope"></i><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            </div>
          </div>

          {/* Working Hours Column */}
          <div className="working-hours">
            <h4>Working Hours</h4>
            {contact.workingHours.map((time, idx) => (
              <p key={idx}>{time}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
