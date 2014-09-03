var fileVrsn = Math.random();
// Adding the script tag to the head as suggested before
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'js/main.js?'+fileVrsn;
// Fire the loading
head.appendChild(script);