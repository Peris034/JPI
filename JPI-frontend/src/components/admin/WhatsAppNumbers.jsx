import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WhatsAppNumbers = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/whatsapp/list`);
            setLogs(response.data);
        } catch (error) {
            console.error('Error fetching WhatsApp numbers:', error);
        }
    };

    return (
        <div className="admin-page">
            <h2>WhatsApp Number List</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Number</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={log._id}>
                            <td>{index + 1}</td>
                            <td>{log.number}</td>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WhatsAppNumbers;
