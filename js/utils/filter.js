'use strict';
const filterByheadquarter = (students, selelectedHeadquarterValue)=>{
  return students.filter((student)=>{
    return student.headquarter == selelectedHeadquarterValue;
  });
}

const filterStudentRandom = (students, selelectedHeadquarter)=>{
  let filteredStudents = filterByheadquarter(students, selelectedHeadquarter);
  let numAl = Math.random()*filteredStudents.length;
  let randomNumber = Math.floor(Math.random()*filteredStudents.length);
  return filteredStudents.filter((student, index)=>{
    if(randomNumber == index){
      return student
    }
  });
}
