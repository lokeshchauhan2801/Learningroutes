
import React from 'react';

const DropDownCourses = () => {
  return (
    <div>
      <label htmlFor="courseDropdown">Select a Course:</label>
      <select id="courseDropdown" name="courses">
        <option value="online-pg-programmes">Online PG Programmes</option>
        <option value="executive-mba-programmes">Executive MBA Programmes</option>
        <option value="online-ug-programmes">Online UG Programmes</option>
        <option value="online-msc-programmes">Online MSc Programmes</option>
        <option value="executive-programmes">Executive Programmes</option>
        <option value="online-dba-programmes">Online DBA Programmes</option>
        <option value="certifications-courses">Certifications Courses</option>
        <option value="job-linked-programs-upgrad">Job-Linked programs (upGrad)</option>
      </select>
    </div>
  );
};

export default DropDownCourses;
