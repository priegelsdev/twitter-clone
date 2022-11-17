import {tweetData} from "/data.js";

const tweetInputText = document.querySelector('.tweet-input-text');
const tweetBtn = document.querySelector('.tweet-btn');
const feed = document.querySelector('.feed');

tweetBtn.addEventListener('click', getFeedHTML);


function getFeedHTML() {
  for (let tweet of tweetData) {
    feed.innerHTML += `
      <div class="tweet">
        <div class="tweet-inner">
          <img src="URL OF PROFILE PIC" class="profile-pic">
          <div>
            <p class="handle">${tweet.name}</p>
            <p class="tweet-text">${tweet.color}TWEET TEXT</p>
            <div class="tweet-details">
              <span class="tweet-detail">
                NUMBER OF REPLIES
              </span> 
              <span class="tweet-detail">
                ${tweet.id}
              </span> 
              <span class="tweet-detail">
                NUMBER OF RETWEETS
              </span>      
            </div>
          </div>
        </div>
      </div>`
  }
}






