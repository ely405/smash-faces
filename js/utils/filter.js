'use strict';
const filterByheadquarter = (students, selelectedHeadquarterValue)=>{
  return students.filter((student)=>{
    return student.headquarter == selelectedHeadquarterValue;
  });
}

const filterStudentRandom = (students, selelectedHeadquarter)=>{
  console.log(students);
  let filteredStudents = filterByheadquarter(students, selelectedHeadquarter);
  let randomNumber = Math.floor(Math.random()*filteredStudents.length);
  return filteredStudents.filter((student, index)=>{
    console.log(randomNumber);
    if(randomNumber == index){
      console.log(student);
      console.log(state.selectedStudent = student);
      filteredStudents.splice(index, 1);
      return student
    }
  });
}
