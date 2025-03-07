import React, { useEffect, useState } from 'react';
import './Inquiries.css';

const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [inquiriesPerPage, setInquiriesPerPage] = useState(10);

    useEffect(() => {
        fetch('http://localhost:5000/api/inquiries')
            .then(res => res.json())
            .then(data => {
                // Sort inquiries so latest comes first
                const sortedData = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
                setInquiries(sortedData);
            })
            .catch(console.error);
    }, []);

    // Pagination logic
    const indexOfLastInquiry = currentPage * 10; // Always paginate by 10, even if more rows are shown within table scroll
    const indexOfFirstInquiry = indexOfLastInquiry - 10;
    const currentPageInquiries = inquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);

    // Total Pages (pagination always based on 10 rows per page)
    const totalPages = Math.ceil(inquiries.length / 10);

    // Visible rows within table (scroll area, tied to user selection)
    const visibleInquiries = currentPageInquiries.slice(0, inquiriesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handlePageSizeChange = (e) => {
        setInquiriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page if page size changes
    };

    const totalEntries = inquiries.length;
    const showingFrom = (currentPage - 1) * 10 + 1;
    const showingTo = Math.min(currentPage * 10, totalEntries);

    return (
        <div className="inquiry-list">
            <h2>Inquiry List</h2>

            {/* Page size selector */}
            <div className="pagination-controls">
                <label>Show per page:</label>
                <select value={inquiriesPerPage} onChange={handlePageSizeChange}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

            {/* Inquiry Table with Scroll */}
            <div className="inquiry-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Topic</th>
                            <th>Message</th>
                            <th>Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleInquiries.map(inquiry => (
                            <tr key={inquiry._id}>
                                <td>{inquiry.name}</td>
                                <td>{inquiry.mobile}</td>
                                <td>{inquiry.email}</td>
                                <td>{inquiry.topic}</td>
                                <td>{inquiry.message}</td>
                                <td>{new Date(inquiry.submittedAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info & Controls */}
            <div className="pagination-footer">
                <div className="entry-info">
                    Showing {showingFrom} to {showingTo} of {totalEntries} entries
                </div>
                <div className="pagination-nav">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>← Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next →</button>
                </div>
            </div>
        </div>
    );
};

export default Inquiries;
