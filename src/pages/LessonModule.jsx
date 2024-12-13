import React, { Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const Lesson1 = lazy(() => import('./Lessons/Lesson1'));
const Lesson2 = lazy(() => import('./Lessons/Lesson2'));
const Lesson3 = lazy(() => import('./Lessons/Lesson3'));
const Lesson4 = lazy(() => import('./Lessons/Lesson4'));
const Lesson5 = lazy(() => import('./Lessons/Lesson5'));
const Lesson6 = lazy(() => import('./Lessons/Lesson6'));

const LessonModule = () => {
  const { id } = useParams();

  const lessonsMap = {
    1: <Lesson1 />,
    2: <Lesson2 />,
    3: <Lesson3 />,
    4: <Lesson4 />,
    5: <Lesson5 />,
    6: <Lesson6 />,
  };

  if (!id) {
    return <Navigate to="/module/1" />;
  }

  const lessonComponent = lessonsMap[id] || <h2>Lesson not found</h2>;

  return (
    <div className="lesson-container">
      <Suspense fallback={<div>Loading lesson...</div>}>
        {lessonComponent}
      </Suspense>
    </div>
  );
};

export default LessonModule;