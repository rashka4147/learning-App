import React, { useState } from 'react';

const LessonForm = ({ addLesson }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLesson = { id: Date.now(), title, description };
        addLesson(newLesson);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <label className="block">Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded p-1 w-full" />
            </div>
            <div className="mb-2">
                <label className="block">Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded p-1 w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Add Lesson</button>
        </form>
    );
};

export default LessonForm;
