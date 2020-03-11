var tweetCount;
var tweetInput;
var tweets = [];
var max = 10;

handleInput = () => {
    var max = 10;
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

main = () => {
    tweetCount = document.getElementById('tweetCountID');
    tweetInput = document.getElementById('tweetInput');
    tweetInput.addEventListener('input', handleInput);
    console.info('Sup BISH');
}

