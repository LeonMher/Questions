const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');

const firstAns = document.querySelector('.firstAnswer');
const secondAnswer = document.querySelector('.two');
const thirdAnswer = document.querySelector('.three');


button.addEventListener('click', function(){

    firstAns.classList.toggle('answerClass')
    button.classList.toggle('btnClass')
})


button2.addEventListener('click', function(){

    secondAnswer.classList.toggle('answerClass')
    button2.classList.toggle('btnClass2')
})


button3.addEventListener('click', function(){

    thirdAnswer.classList.toggle('answerClass')
    button3.classList.toggle('btnClass3')
})



