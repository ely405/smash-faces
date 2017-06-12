'use strict';

const update = ()=>{
  render(documentRoot);
}
const render = (documentRoot)=>{
  documentRoot.empty();
  const wrapper = $('<div/>', {'class':'wrapper'});

  wrapper.append(createHeader(update), createSelect(update));
  documentRoot.append(wrapper);
}

const state={
  students: null,
  selectedStudent:null,
  gameScore: 0,
  failedAttemps: 0,
  gameTurn : 0
}

const documentLoad = ()=>{
  getJsonList('students.json', (error, json)=>{
    if(error){
      alert(error.message);
    }
    state.students = json
    let rootToLoad = $('.root');
    render(rootToLoad);
  });
}

$(documentLoad);
