'use strict';

const createHeader = (updatePageFunction)=>{
  let header = $('<header/>');
  let title = $('<h1/>', {'class':'ff-rokkitt'}).html('Smash Faces');
  let descriptionContainer = $('<div/>');
  let descriptionParagraph = $('<p/>', {'class':'ff-roboto'}).html('Bienvenida al grupo de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ellas su nombre. Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente foto.');

  descriptionContainer.append(descriptionParagraph);
  header.append(title, descriptionContainer);
  return header;
}
