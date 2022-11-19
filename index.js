import {tweetData} from "/data.js";

const tweetInputText = document.querySelector('.tweet-input-text');
const tweetBtn = document.querySelector('.tweet-btn');
const feed = document.querySelector('.feed');
const like = document.querySelector('.fa-heart');

// event listeners

tweetBtn.addEventListener('click', function() {
  console.log(getFeedHtml());
});

  // one even listener to listen for clicks on icons such as like, retweet and comment

document.addEventListener('click', function(e) {
  if(e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like)
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet)
  }
})

// create function for handling click on like icon

function handleLikeClick(tweetId){
  const targetTweetObject = tweetData.filter(tweet => tweetId === tweet.uuid)[0]

  if (targetTweetObject.isLiked) {
    targetTweetObject.likes--;
  } else {
    targetTweetObject.likes++;
  }
  
  targetTweetObject.isLiked = !targetTweetObject.isLiked;

  render();
}

// create function for handling click on retweet icon

function handleRetweetClick(tweetId){
  const targetTweetObject = tweetData.filter(tweet => tweet.uuid === tweetId)[0];

  if (targetTweetObject.isRetweeted) {
    targetTweetObject.retweets--;
  } else {
    targetTweetObject.retweets++;
  }

  targetTweetObject.isRetweeted = !targetTweetObject.isRetweeted;

  render();
}

// create function for getting post feed

function getFeedHtml() {
  let feedHtml = ``

  tweetData.forEach(function(tweet) {

    // set up logic to make clicks on icons change color

    let heartClass = ''
    let retweetClass = ''

    if (tweet.isLiked) {
      heartClass = 'liked'
    }
  
    if (tweet.isRetweeted) {
      retweetClass = 'retweeted'
    }

    // render out each tweet from data.js
    
    feedHtml += `
      <div class="tweet">
        <div class="tweet-inner">
          <img src="${tweet.profilePic}" class="profile-pic">
          <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
              <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                ${tweet.replies.length}
              </span> 
              <span class="tweet-detail">
                <i class="fa-solid fa-heart ${heartClass}" data-like="${tweet.uuid}"></i>
                ${tweet.likes}
              </span> 
              <span class="tweet-detail">
                <i class="fa-solid fa-retweet ${retweetClass}" data-retweet="${tweet.uuid}"></i>
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

// create render function

function render() {
  feed.innerHTML = getFeedHtml();
}

// call render function to show feed on page load

render();



