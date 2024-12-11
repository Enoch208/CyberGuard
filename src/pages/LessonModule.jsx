import React, { Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const Lesson1 = lazy(() => import('./lessons/Lesson1'));
const Lesson2 = lazy(() => import('./lessons/Lesson2'));
const Lesson3 = lazy(() => import('./lessons/Lesson3'));
const Lesson4 = lazy(() => import('./lessons/Lesson4'));
const Lesson5 = lazy(() => import('./lessons/Lesson5'));
const Lesson6 = lazy(() => import('./lessons/Lesson6'));

const LessonModule = () => {
  const { id } = useParams(); // Get the lesson ID from the URL

  // Mapping of lesson IDs to components
  const lessonsMap = {
    1: <Lesson1 />,
    2: <Lesson2 />,
    3: <Lesson3 />,
    4: <Lesson4 />,
    5: <Lesson5 />,
    6: <Lesson6 />,
  };

  // If no ID is provided, redirect to the first lesson or show a message
  if (!id) {
    return <Navigate to="/module/1" />; // Redirect to the first lesson
  }

  // Check if the lesson exists in the map
  const lessonComponent = lessonsMap[id] || <h2>Lesson not found</h2>;

  return (
    <div className="lesson-container">
      <Suspense fallback={<div>Loading lesson...</div>}>
        {lessonComponent} {/* Render the lesson component or "Lesson not found" */}
      </Suspense>
    </div>
  );
};

export default LessonModule;