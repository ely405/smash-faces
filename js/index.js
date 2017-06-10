'use strict';

const render = (documentRoot)=>{
  documentRoot.empty();
  const wrapper = $('<div/>', {'class':'wrapper'});
  const update = ()=>{
    render(documentRoot);
  }

  wrapper.append(createHeader(update), createSelect(update), createGameSection(state.students[0].url, state.students[0].name));
  documentRoot.append(wrapper);
}

const state={
  students: null,
  selectedStudent:null
}

const documentLoad = ()=>{
  getJsonList('students.json', (error, json)=>{
    (error)? alert(error.message): '';
    state.students = json
    let rootToLoad = $('.root');
    render(rootToLoad);
  });
  console.log(state.students);
}

$(documentLoad);
