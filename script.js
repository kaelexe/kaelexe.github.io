const element = document.querySelector('.text');

let i = 0, 
    text = 'kaelexe',
    letters = 0,
    word = '',
    isTyping = true,
    speed = 250,
    wait = element.getAttribute('data-wait');

(function typing(){

    if(isTyping){
        word = text.slice(0, ++letters);
    }else{
        word = text.slice(0, --letters);
    }

    document.querySelector('.text').textContent = word;

    if(!isTyping){
        speed = 150;
    }

    if(isTyping && text === word){
        speed = wait;
        isTyping = false;
    }else if(!isTyping && word === ''){
        isTyping = true;
        speed = 250;
    }

    setTimeout(typing, speed);

})();
