import axios from 'axios';

const API = axios.create({ baseURL: '/api/admin' });

// Inquiries
export const fetchInquiries = () => API.get('/inquiries');

// Certificates
export const fetchCertificates = () => API.get('/certificates');
export const addCertificate = (data) => API.post('admin/certificates', data);
export const deleteCertificate = (id) => API.delete(`/certificates/${id}`);

// Banners
export const fetchBanner = () => API.get('/banners');
export const updateBanner = (data) => API.put('/banners', data);

// Logo
export const fetchLogo = () => API.get('/logo');
export const updateLogo = (data) => API.put('/logo', data);

// Products
export const fetchProducts = () => API.get('/products');
export const addProduct = (data) => API.post('/products', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// Payment Options
export const fetchPaymentOptions = () => API.get('/payment-options');
export const updatePaymentOptions = (data) => API.put('/payment-options', data);

// WhatsApp Number
export const fetchWhatsAppNumber = () => API.get('/whatsapp-number');
export const updateWhatsAppNumber = (data) => API.put('/whatsapp-number', data);
