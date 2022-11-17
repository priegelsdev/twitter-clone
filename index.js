import {tweetData} from "/data.js";

const tweetInputText = document.querySelector('.tweet-input-text');
const tweetBtn = document.querySelector('.tweet-btn');
const feed = document.querySelector('.feed');

tweetBtn.addEventListener('click', function() {
  console.log(getFeedHtml());
});


function getFeedHtml() {
  let feedHtml = ``

  tweetData.forEach(function(tweet) {
    
    feedHtml += `
      <div class="tweet">
        <div class="tweet-inner">
          <img src="${tweet.profilePic}" class="profile-pic">
          <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}TWEET TEXT</p>
            <div class="tweet-details">
              <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots"></i>
                ${tweet.replies.length}
              </span> 
              <span class="tweet-detail">
                <i class="fa-regular fa-heart"></i>
                ${tweet.likes}
              </span> 
              <span class="tweet-detail">
                <i class="fa-solid fa-retweet"></i>
                ${tweet.retweets}
              </span>      
            </div>
          </div>
        </div>
      </div>
      `
  })
  return feedHtml;
}

function render() {
  feed.innerHTML = getFeedHtml();
}

render();



