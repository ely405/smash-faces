'use strict';

const createGameImage = (url, name)=>{
  let gameSection = $('<section/>',{'class':'flex-container'});
  let imageContainer = $('<figure/>',{'class':'img-container'});
  let image = $('<img/>', {'src':url, 'alt':name, 'class':'img-responsive'});
  let inputContainer = $('<div/>');
  let inputInfo = $('<label/>').html('Ingresa su nombre');
  let inputStudentName = $('<input/>',{'id':'inp-student-name', 'placeholder':'Nombre'});
  let checkButton = $('<button/>',{'type':'button', 'id':'check-button'}).html('COMPROBAR')
  let gameResult = $('<span/>',{'id':'game-result'});

  gameSection.append(imageContainer.append(image), inputContainer.append(inputInfo,inputStudentName, checkButton, gameResult));

  checkButton.click(()=>{
    dataCompare(name, inputStudentName.val(), gameResult);
  })

  return gameSection;
}

const createSelect = (updatePageFunction)=>{
  let selectContainer = $('<div/>');
  let chooseHeadquarters = $('<label/>').html('Elige tu sede');
  let headquarterContainer = $('<select/>');
  let choose = $('<option/>').html('Elige una sede');
  let headquarterLima = $('<option/>', {'value':'Perú'}).html('Perú');
  let headquarterMexico = $('<option/>', {'value':'México'}).html('México');
  let imageContainer = $('<div/>', {'id':'image-container'});

  headquarterContainer.append(choose, headquarterLima, headquarterMexico);
  selectContainer.append(chooseHeadquarters, headquarterContainer, imageContainer);

  headquarterContainer.change(function(){
    console.log(headquarterContainer.val());
    let selectedOption = headquarterContainer.val();
    reRender(imageContainer, selectedOption, updatePageFunction);
  });
  return selectContainer;
}

const createScoreContainer = ()=>{
  let scoreContainer = $('<div/>');
  let scoreTitle = $('<span/>').html('Puntos: ');
  let score = $('<span/>', {'id':'total-score'});
  scoreContainer.append(scoreTitle, score);
  return scoreContainer;
}

const dataCompare = (dataToCompare, inputData, sectionToShowResult)=>{
  sectionToShowResult.html((dataToCompare.toLowerCase() == inputData.toLowerCase())?'Correcto':'Incorrecto');
}

const reRender = (resultContainer, filterItems, update)=>{
  alert('reRender');
  resultContainer.empty();
  const filteredStudents = filterStudentRandom(state.students, filterItems);
  console.log(filteredStudents);
  if(filterItems != 'Elige una sede'){
      resultContainer.append(createGameImage(filteredStudents.url, filteredStudents.name));
  }
}
