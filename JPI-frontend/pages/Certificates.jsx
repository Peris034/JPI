import React, { useEffect, useState } from 'react';
import { fetchCertificates, addCertificate, deleteCertificate } from '../src/api/adminApi';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [newCert, setNewCert] = useState({ name: '', url: '' });

    useEffect(() => {
        loadCertificates();
    }, []);

    const loadCertificates = async () => {
        const { data } = await fetchCertificates();
        setCertificates(data);
    };

    const handleAdd = async () => {
        await addCertificate(newCert);
        setNewCert({ name: '', url: '' });
        loadCertificates();
    };

    const handleDelete = async (id) => {
        await deleteCertificate(id);
        loadCertificates();
    };

    return (
        <div>
            <h2>Certificates</h2>
            <div>
                <input
                    placeholder="Name"
                    value={newCert.name}
                    onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                />
                <input
                    placeholder="URL"
                    value={newCert.url}
                    onChange={(e) => setNewCert({ ...newCert, url: e.target.value })}
                />
                <button onClick={handleAdd}>Add Certificate</button>
            </div>
            <ul>
                {certificates.map(cert => (
                    <li key={cert._id}>
                        {cert.name} - <a href={cert.url} target="_blank" rel="noopener noreferrer">View</a>
                        <button onClick={() => handleDelete(cert._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificates;
