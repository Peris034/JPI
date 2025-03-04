import React from 'react';
import './Downloads.css';
import downloadImg from '../../assets/download-img.png';  // Place this in src/assets/

// Downloads list with file names and paths
const downloads = [
    {
        name: "Jay Parivartan India Marketing Pvt Ltd",
        file: "Jay parivartan india marketing pvt ltd .jpg"
    },
    {
        name: "JPI Plan PDF",
        file: "Jpi plan.pdf"
    }
];

const Downloads = () => (
    <section id="downloads" className="download-wrapper">
        <h2 className="sec-ttl">Downloads</h2>

        <div className="download-grid">
            {downloads.map((item, index) => (
                <div className="download-item" key={index}>
                    <a
                        href={require(`../../assets/${item.file}`)}
                        download={item.file}
                        className="download-link"
                    >
                        <img src={downloadImg} alt={item.name} className="download-image" />
                        <p className="download-name">{item.name}</p>
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Downloads;
