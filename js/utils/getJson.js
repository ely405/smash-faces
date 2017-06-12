'use strict';

const getJsonList = (urlList, callback)=>{
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    if(xhr.status !== 200){
      return callback(new Error('Error loading JSON from ' + urlList + '(' + xhr.status + ')'));
    }
    callback(null, xhr.response, true);
    console.log(xhr.response);
  });

  xhr.open('GET', urlList);
  xhr.responseType = 'json';
  xhr.send();
  console.log(xhr);
}
