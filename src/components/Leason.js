import React, { useState } from 'react';

const Lesson = ({ lesson, updateLesson, deleteLesson }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdate = () => {
        updateLesson({ ...lesson, title, description });
        setIsEditing(false);
    };

    // Check if lesson is undefined or null
    if (!lesson) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="border p-2 mb-2">
            {isEditing ? (
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded p-1 w-full mb-2" />
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded p-1 w-full mb-2"></textarea>
                    <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Update</button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-2 py-1 rounded">Cancel</button>
                </div>
            ) : (
                <div>
                    <h3 className="text-lg font-bold">{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => deleteLesson(lesson.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </div>
            )}
        </div>
    );
};

export default Lesson;
