'use strict';

const getJsonList = (urlList, callback)=>{
  console.log(urlList);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    (xhr.status !== 200)? callback(new Error('Error loading JSON from ' + urlList + '(' + xhr.status + ')')):'';

  });
  xhr.open('GET', urlList, false);
  //xhr.responseType = 'json';
  xhr.send(null);
  console.log(xhr);
  callback(null, xhr.response);
  console.log(urlList);
}
