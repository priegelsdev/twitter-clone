import {tweetData} from "/data.js";

const tweetInputText = document.querySelector('.tweet-input-text');
const tweetBtn = document.querySelector('.tweet-btn');

tweetBtn.addEventListener('click', tweetText);

function tweetText() {
  console.log(tweetInputText.value)
  
}

