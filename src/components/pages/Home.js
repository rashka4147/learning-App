import React, { useState } from 'react';
import LessonForm from '../LessonForm';
import LessonList from '../LessonList';

const Home = () => {
    const [lessons, setLessons] = useState([]);

    const addLesson = (lesson) => {
        setLessons([...lessons, lesson]);
    };

    const updateLesson = (updatedLesson) => {
        setLessons(lessons.map(lesson => lesson.id === updatedLesson.id ? updatedLesson : lesson));
    };

    const deleteLesson = (id) => {
        setLessons(lessons.filter(lesson => lesson.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <LessonForm addLesson={addLesson} />
            <LessonList lessons={lessons} updateLesson={updateLesson} deleteLesson={deleteLesson} />
        </div>
    );
};

export default Home;
