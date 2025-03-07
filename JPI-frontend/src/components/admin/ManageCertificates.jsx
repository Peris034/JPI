import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button, Upload, message, List, Switch, Modal, Image } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ManageCertificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [form, setForm] = useState({ title: '', description: '', image: null, previewImage: '' });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchCertificates();
    }, []);

    const fetchCertificates = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates`);
        setCertificates(data);
    };

    const handleFileChange = ({ fileList }) => {
        const file = fileList[0]?.originFileObj;
        if (file) {
            setForm({
                ...form,
                image: file,
                previewImage: URL.createObjectURL(file),
            });
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!form.title) {
            message.error('Title is required');
            return;
        }

        if (!form.image && !editId) {
            message.error('Image is required for new certificates');
            return;
        }

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('issuedDate', new Date().toISOString()); // You can also let admin pick a date

        if (form.image) {
            formData.append('image', form.image);
        }

        try {
            if (editId) {
                await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates/${editId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                message.success('Certificate updated');
            } else {
                await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                message.success('Certificate added');
            }

            resetForm();
            fetchCertificates();
        } catch (error) {
            message.error('Failed to save certificate');
        }
    };

    const resetForm = () => {
        setForm({ title: '', description: '', image: null, previewImage: '' });
        setEditId(null);
    };

    const handleEdit = (certificate) => {
        setEditId(certificate._id);
        setForm({
            title: certificate.title,
            description: certificate.description,
            image: null,  // Clear file input
            previewImage: certificate.imageUrl, // Use existing image
        });
    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this certificate?',
            onOk: async () => {
                await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates/${id}`);
                fetchCertificates();
            }
        });
    };

    const handleToggle = async (id, isActive) => {
        await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates/${id}`, { isActive });
        fetchCertificates();
    };

    return (
        <div>
            <h2>Manage Certificates</h2>
            <Input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
            <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} />

            {form.previewImage && (
                <Image width={100} src={form.previewImage} style={{ marginBottom: 10 }} />
            )}

            <Upload beforeUpload={() => false} onChange={handleFileChange}>
                <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>

            <Button onClick={handleSubmit} type="primary" style={{ marginTop: 10 }}>
                {editId ? 'Update Certificate' : 'Add New Certificate'}
            </Button>

            <List
                dataSource={certificates}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <Switch checked={item.isActive} onChange={(checked) => handleToggle(item._id, checked)} />,
                            <EditOutlined onClick={() => handleEdit(item)} />,
                            <DeleteOutlined onClick={() => handleDelete(item._id)} />
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<img src={`${process.env.REACT_APP_BACKEND_URL}${item.imageUrl}`} alt={item.title} style={{ width: 50 }} />}
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ManageCertificates;
