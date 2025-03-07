import React, { useState } from 'react';
import axios from 'axios';
import './WhatsAppForm.css';

const WhatsAppForm = () => {
    const [formData, setFormData] = useState({ dialCode: '+91', number: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const backendURL = process.env.REACT_APP_BACKEND_URL;
            const response = await axios.post(`${backendURL}/api/whatsapp/send-whatsapp-link`, formData);
            if (response.data.success) {
                window.open(response.data.whatsappLink, '_blank');
            } else {
                alert('Failed to generate WhatsApp link');
            }
        } catch (error) {
            alert('Error sending request.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="whatsapp-wrapper">
            <div className="whatsapp-container">
                <h2 className="whatsapp-heading">Get Website URL on WhatsApp</h2>
                <form className="whatsapp-compact-form" onSubmit={handleSubmit}>
                    <select name="dialCode" value={formData.dialCode} onChange={handleChange} className="form-select">
                        <option value="+91">+91 🇮🇳</option>
                    </select>

                    <input
                        type="number"
                        name="number"
                        placeholder="WhatsApp Number"
                        value={formData.number}
                        onChange={handleChange}
                        className="form-control"
                        maxLength="10"
                    />

                    <button type="submit" disabled={loading} className="btn-submit">
                        {loading ? '...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default WhatsAppForm;
