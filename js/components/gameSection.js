'use strict';
let imageContainer;
let selectedOption;
const createGameImage = (url, name, updatePageFunction)=>{
  let gameSection = $('<section/>',{'class':'flex-container'});
  let imageContainer = $('<figure/>',{'class':'img-container'});
  let image = $('<img/>', {'src':url, 'alt':name, 'class':'img-responsive'});
  let inputContainer = $('<div/>');
  let inputInfo = $('<label/>').html('Ingresa su nombre');
  let inputStudentName = $('<input/>',{'id':'inp-student-name', 'placeholder':'Nombre'});
  let checkButton = $('<button/>',{'type':'button', 'id':'check-button'}).html('COMPROBAR')
  let gameResult = $('<span/>',{'id':'game-result'});

  gameSection.append(imageContainer.append(image), inputContainer.append(inputInfo,inputStudentName, checkButton, gameResult));
  let allScore = $('#total-score');
  checkButton.click((e)=>{
    dataCompare(name, inputStudentName.val(), gameResult, allScore, selectedOption, updatePageFunction);
  });
  inputStudentName.keyup((event)=>{
    (event.which == 13)? dataCompare(name, inputStudentName.val(), gameResult, allScore, selectedOption, updatePageFunction): '';
  })

  return gameSection;
}

const createSelect = (updatePageFunction)=>{
  let selectContainer = $('<div/>');
  let chooseHeadquarters = $('<label/>').html('Elige tu sede');
  let headquarterContainer = $('<select/>');
  let choose = $('<option/>').html('Elige una sede');
  let headquarterLima = $('<option/>', {'value':'Lima'}).html('Lima');
  let headquarterMexico = $('<option/>', {'value':'México'}).html('México');
  imageContainer = $('<div/>', {'id':'image-container'});

  headquarterContainer.append(choose, headquarterLima, headquarterMexico);
  selectContainer.append(chooseHeadquarters, headquarterContainer, createScoreContainer(), imageContainer);

  headquarterContainer.change(function(){
    selectedOption = headquarterContainer.val();
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

const dataCompare = (dataToCompare, inputData, sectionToShowResult, showScoreContainer, filter, updatePageFunction)=>{
  if(dataToCompare.toLowerCase() == inputData.toLowerCase()){
    sectionToShowResult.html('¡Excelente, acertaste!');
    state.gameScore += 5;
    showScoreContainer.html(state.gameScore + ' puntos');
    setTimeout(()=>{reRender(imageContainer, filter, updatePageFunction);}, 2500);
  }else{
    state.failedAttemps ++;
    sectionToShowResult.html('Sigue intentando');
    state.gameScore -= 1;
    showScoreContainer.html(state.gameScore + ' puntos');
    (state.failedAttemps == 5)?(reRender(imageContainer, filter, updatePageFunction), state.failedAttemps = 0):'';
  }
}

const reRender = (resultContainer, filterItems, update)=>{
  alert('reRender');
  resultContainer.empty();
  const filteredStudent = filterStudentRandom(state.students, filterItems);
  if(filterItems != 'Elige una sede'){
    $.each(filteredStudent, (index, student)=>{
      resultContainer.append(createGameImage(student.url, student.name, update));
    });
  }
}
