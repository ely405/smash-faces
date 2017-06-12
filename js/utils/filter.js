'use strict';
const filterByheadquarter = (students, selelectedHeadquarterValue)=>{
  return students.filter((student)=>{
    return student.headquarter == selelectedHeadquarterValue;
  });
}

const filterStudentRandom = (students, selelectedHeadquarter)=>{
  console.log(students);
  console.log(selelectedHeadquarter);
  let filteredStudents = filterByheadquarter(students, selelectedHeadquarter);
  console.log(filteredStudents);
  let numAl = Math.random()*filteredStudents.length;
  let randomNumber = Math.floor(Math.random()*filteredStudents.length);
  console.log(Math.random());
  console.log('random ' + numAl);
  console.log('ra '+ randomNumber);
  return $.each(filteredStudents, (index,  student)=>{
    if(randomNumber == index){
      console.log('if ' +index);
      console.log(student);
      return student;
    }
  });
}
