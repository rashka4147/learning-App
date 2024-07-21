import React, { useState } from 'react';
import Lesson from './Leason';
import LessonForm from './LessonForm';
const LessonList = () => {
    const [lessons, setLessons] = useState([
        { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1' },
        { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2' },
        { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3' },
    ]);

    const updateLesson = (updatedLesson) => {
        const updatedLessons = lessons.map(lesson => lesson.id === updatedLesson.id ? updatedLesson : lesson);
        setLessons(updatedLessons);
    };

    const deleteLesson = (lessonId) => {
        const filteredLessons = lessons.filter(lesson => lesson.id !== lessonId);
        setLessons(filteredLessons);
    };

    const addLesson = (newLesson) => {
        setLessons([...lessons, newLesson]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lesson List</h1>

            {/* LessonForm component for adding new lessons */}
            <LessonForm addLesson={addLesson} />

            {/* List of existing lessons */}
            {lessons.map((lesson) => (
                <Lesson
                    key={lesson.id}
                    lesson={lesson}
                    updateLesson={updateLesson}
                    deleteLesson={deleteLesson}
                />
            ))}
        </div>
    );
};

export default LessonList;
