import React from 'react';
import './Downloads.css';

// Downloads list with file names and paths
const downloads = [
    {
        name: "Jay Parivartan India Marketing Pvt Ltd",
        file: `${process.env.PUBLIC_URL}/assets/Jay parivartan india marketing pvt ltd .jpg`
    },
    {
        name: "JPI Plan PDF",
        file: `${process.env.PUBLIC_URL}/assets/Jpi plan.pdf`
    }
];

const Downloads = () => (
    <section id="downloads" className="download-wrapper">
        <h2 className="sec-ttl">Downloads</h2>

        <div className="download-grid">
            {downloads.map((item, index) => (
                <div className="download-item" key={index}>
                    <a
                        href={item.file}
                        download
                        className="download-link"
                    >
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/download-img.png`} 
                            alt={item.name} 
                            className="download-image" 
                        />
                        <p className="download-name">{item.name}</p>
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Downloads;
