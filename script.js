let i = 0, text;
text = 'kaelexe'

function typing(){
    if(i < text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 250);
    };
}

typing();