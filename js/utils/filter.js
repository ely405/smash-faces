'use strict';
const filterByheadquarter = (students, selelectedHeadquarterValue)=>{
  return students.filter((student)=>{
    return student.headquarter == selelectedHeadquarterValue;
  });
}

const filterStudentRandom = (students, selelectedHeadquarter)=>{
  let filteredStudents = filterByheadquarter(students, selelectedHeadquarter);
  let randomNumber = Math.floor(Math.random()*filteredStudents.length);
  return filteredStudents.filter((student, index)=>{
    if(randomNumber == index){
      filteredStudents.splice(index, 1);
      return student
    }
  });
}
