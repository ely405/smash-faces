'use strict';

const createSelect = (updatePageFunction)=>{
  let selectContainer = $('<div/>');
  let chooseHeadquarters = $('<label/>').html('Elige tu sede');
  let headquarterContainer = $('<select/>');
  let headquarterLima = $('<option/>', {'value':'Lima'}).html('Lima');
  let headquarterMexico = $('<option/>', {'value':'México'}).html('México');
  headquarterContainer.append(headquarterLima, headquarterMexico);
  selectContainer.append(chooseHeadquarters, headquarterContainer, createScoreContainer());
  return selectContainer;
}

const createScoreContainer = ()=>{
  let scoreContainer = $('<div/>');
  let scoreTitle = $('<span/>').html('Puntos: ');
  let score = $('<span/>', {'id':'total-score'});
  scoreContainer.append(scoreTitle, score);
  return scoreContainer;
}

const createGameSection = (imageUrl, imageName)=>{
  let gameSection = $('<section/>');
  let imageContainer = $('<figure/>');
  let image = $('<img/>', {'src':imageUrl, 'alt':imageName});
  gameSection.append(imageContainer.append(image));
  return gameSection;
}
