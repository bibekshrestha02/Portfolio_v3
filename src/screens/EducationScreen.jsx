import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
export default function EducationScreen() {
  const editHandler = () => {
    return;
  };
  const { title, courses } = useSelector((state) => state.admin.education);
  return (
    <ScreenTemplete title={title} editHandler={editHandler}>
      {courses.map((course) => {
        return (
          <EducationDetailsCompoent
            key={course.name}
            name={course.name}
            place={course.place}
            year={course.year}
            branch={course.branch}
          />
        );
      })}
    </ScreenTemplete>
  );
}
