import React, { useState } from 'react';
import API from './api';

function VerseForm({ initialData = {}, onSubmit }) {
    const [verseReference, setVerseReference] = useState(
        initialData.verse_reference || ''
    );
    const [verseText, setVerseText] = useState(initialData.verse_text || '');
    const [meaning, setMeaning] = useState(initialData.meaning || '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!verseReference || !verseText || !meaning) {
            setError('All fields are required.');
            return;
        }
        try {
            await onSubmit({ verse_reference: verseReference, verse_text: verseText, meaning });
            setVerseReference('');
            setVerseText('');
            setMeaning('');
            setError('');
        } catch (err) {
            setError('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold text-center mb-4">
                    {initialData.id ? 'Edit Verse' : 'Add Verse'}
                </h2>
                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}
                <div className="mb-4">
                    <label
                        htmlFor="verseReference"
                        className="block text-gray-700 mb-2"
                    >
                        Verse Reference
                    </label>
                    <input
                        id="verseReference"
                        type="text"
                        placeholder="E.g., Dan 7:1"
                        value={verseReference}
                        onChange={(e) => setVerseReference(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="verseText" className="block text-gray-700 mb-2">
                        Verse Text
                    </label>
                    <textarea
                        id="verseText"
                        placeholder="Enter the verse text"
                        value={verseText}
                        onChange={(e) => setVerseText(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="meaning" className="block text-gray-700 mb-2">
                        Meaning
                    </label>
                    <textarea
                        id="meaning"
                        placeholder="Enter the meaning"
                        value={meaning}
                        onChange={(e) => setMeaning(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {initialData.id ? 'Update Verse' : 'Add Verse'}
                </button>
            </form>
        </div>
    );
}

export default VerseForm;
