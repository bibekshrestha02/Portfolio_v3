import React from 'react';
import ScreenTemplete from '../templetes/ScreenTemplete';
import { useSelector } from 'react-redux';
import EducationDetailsCompoent from '../components/EducationDetailsCompoent';
export default function EducationScreen() {
  const editHandler = () => {
    return;
  };
  const { title, courses } = useSelector((state) => state.admin.education);
  const { isAdmin } = useSelector((state) => state.admin);
  const colors = useSelector((state) => state.colors);

  return (
    <ScreenTemplete title={title} editHandler={editHandler} isCreateButton>
      {courses.map((course) => {
        return (
          <EducationDetailsCompoent
            colors={colors}
            isAdmin={isAdmin}
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
