import React, { useEffect, useState } from 'react';
import API from './api';

function VersesList() {
    const [verses, setVerses] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchVerses();
    }, [page]);

    const fetchVerses = async () => {
        try {
            const res = await API.get('/verses', { params: { limit: 10, offset: (page - 1) * 10 } });
            setVerses(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-4">Verses</h2>
            <ul className="bg-white shadow-md rounded-lg p-4">
                {verses.map((verse) => (
                    <li key={verse.id} className="border-b border-gray-200 py-2">
                        <strong className="block text-lg">{verse.verse}</strong>
                        <p className="text-gray-600">{verse.notes}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default VersesList;
