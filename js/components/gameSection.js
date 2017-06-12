'use strict';
let imageContainer;
let selectedOption;
let allScore;
const createGameImage = (url, name, updatePageFunction)=>{
  let gameSection = $('<section/>',{'class':'flex-container h-100pr'});
  let imageContainer = $('<figure/>',{'class':'img-container'});
  let image = $('<img/>', {'src':url, 'alt':name, 'class':'img-responsive'});
  let inputContainer = $('<div/>',{'class':'input-container flex-container align-center bg-black c-white'});
  let inputInfo = $('<label/>',{'for':'inp-student-name','class':'ff-roboto'}).html('Ingresa su nombre');
  let inputStudentName = $('<input/>',{'id':'inp-student-name', 'placeholder':'Nombre', 'class':'out-none'});
  let checkButton = $('<button/>',{'type':'button', 'id':'check-button', 'class':'bg-yellow out-none c-white'}).html('COMPROBAR')
  let gameResult = $('<span/>',{'id':'game-result', 'class':'ff-roboto'});

  gameSection.append(imageContainer.append(image), inputContainer.append(inputInfo,inputStudentName, checkButton, gameResult));
  allScore = $('#total-score');
  let optionSelected = $('#sel-headquarter').val();

  checkButton.click(()=>{
    let scoreResult = dataCompare(name, inputStudentName.val(), gameResult, allScore, selectedOption, updatePageFunction);
    // gameResult.html('Obtuviste '+ scoreResult + ' puntos.');
  });
  inputStudentName.keyup((event)=>{
    (event.which == 13)? dataCompare(name, inputStudentName.val(), gameResult, allScore, selectedOption, updatePageFunction): '';
  })

  return gameSection;
}

const createSelect = (updatePageFunction)=>{
  let selectContainer = $('<div/>');
  let chooseHeadquarters = $('<label/>').html('Elige tu sede: ');
  let headquarterContainer = $('<select/>', {'id':'sel-headquarter', 'class':'bg-light-gray'});
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
  reRender(imageContainer, 'Elige una sede', updatePageFunction)
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
    if(state.failedAttemps == 5){
      reRender(imageContainer, filter, updatePageFunction);
       state.failedAttemps = 0;
       state.gameScore -= 1;
       showScoreContainer.html(state.gameScore + ' puntos');
    }
  }
  return state.gameScore;
}

const reRender = (resultContainer, filterItems, update)=>{
  alert('reRender');
  resultContainer.empty();
  let filteredSArray = filterByheadquarter(state.students, filterItems);
  const filteredStudent = filterStudentRandom(state.students, filterItems);
  console.log(state.gameTurn);
  if(state.gameTurn <= filteredSArray.length){
    state.gameTurn ++;
    if(filterItems != 'Elige una sede'){
      $.each(filteredStudent, (index, student)=>{
        resultContainer.append(createGameImage(student.url, student.name, update));
      });
    }else{
      resultContainer.append(createScreenToStartAndEnd(update, 'Para iniciar juego seleccione una sede', ''));
    }
  }else{
    console.log(state.gameTurn +'gameTurn');
      console.log('juego terminado');
      resultContainer.append(createScreenToStartAndEnd(update, 'Juego terminado', allScore.html()));

  }
}

const createScreenToStartAndEnd = (updatePageFunction, messageToParagraph, finalScore)=>{
  let screenSection = $('<section/>',{'class':'flex-container align-center just-center bg-yellow h-100pr'});
  let resultParagraph = $('<p/>',{'class':'c-white ff-roboto'}).html(messageToParagraph);
  let scorePar = $('<p/>',{'class':'c-white ff-roboto'}).html(finalScore);
  return screenSection.append(resultParagraph, scorePar);
}
