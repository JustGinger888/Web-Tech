var tweetCount;
var tweetInput;
var tweets = [];
var max = 10;

handleInput = () => {
    var count = tweetInput.value.length;
    console.log(count.length);
    tweetCount.innerHTML = max-count;
    if (max - count >= 0) {
        tweetCount.style.color = "Green";
    }
    else {
        tweetCount.style.color ="Red";
    }
}

handleEnter = (e) => {
    var count = tweetInput.value.length;
    if(e.keyCode == 13)
    {
        if (max - count >= 0) {
            tweets.push(tweetInput.value);
            console.log(tweets);
            tweetArray.innerHTML = tweets;
            tweetInput.value = "";   
        } else {
            
        }
    } else
    {
        return true;
    }
}

main = () => {
    tweetCount = document.getElementById('tweetCountID');
    tweetInput = document.getElementById('tweetInput');
    tweetArray = document.getElementById('tweetArray');
    
    tweetInput.addEventListener('input', handleInput);
    document.addEventListener('keydown', handleEnter)
}

