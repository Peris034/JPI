import React from 'react';
import './Certificates.css';

// Importing local images for demo
import bhartiMam from '../../assets/bharti-mam.png';
import neetuMam from '../../assets/neetu-somani.png';
import shaileshSir from '../../assets/shailesh-boghara.png';

const Certificates = () => {
    const certificates = [
        {
            name: "SHAILESH BOGHARA",
            src: shaileshSir
        },
        {
            name: "Bharti Patel Mam",
            src: bhartiMam
        },
        {
            name: "Neetu Somani Mam",
            src: neetuMam
        }
    ];

    return (
        <section id="certificates" className="certificate-wrapper">
            <h2 className="sec-ttl">Certificates</h2>

            <div className="certificate-grid">
                {certificates.map((item, index) => (
                    <div className="certificate-item" key={index}>
                        <img alt={item.name} src={item.src} loading="lazy" />
                        <p className="certificate-name">{item.name}</p>
                    </div>
                ))}
            </div>

            <a className="btn-showall" href="/certificates/all/1164">Show All</a>
        </section>
    );
};

export default Certificates;
