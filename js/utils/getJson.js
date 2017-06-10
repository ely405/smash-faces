'use strict';

const getJsonList = (urlList, callback)=>{
  console.log(urlList);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    (xhr.status !== 200)? callback(new Error('Error loading JSON from ' + urlList + '(' + xhr.status + ')')):'';
    callback(null, xhr.response);
  });
  xhr.open('GET', urlList);
  xhr.responseType = 'json';
  xhr.send();
  console.log(xhr);
  console.log(urlList);
}
