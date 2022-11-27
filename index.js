let first=document.querySelector('.first')
let second=document.querySelector('.second')
let final=document.querySelector('.final')
let btn=[...document.querySelectorAll('button')]
let firstChoice
let secondChoice
let finalChoice
btn.forEach(bt=>bt.addEventListener('click',(e)=>{
firstChoice=e.target.className
first.innerHTML=firstChoice
randomSecond()
getResult()
}))
function randomSecond(){
    let random=Math.floor(Math.random() * 3) 
    secondChoice=btn[random].className
    second.innerHTML=secondChoice
}

function getResult(){
if(firstChoice==secondChoice){
    final.innerHTML='draw'
}
else if(firstChoice=='rock'&&secondChoice=='paper'){
    final.innerHTML=`second won`
}
else if(firstChoice=='paper'&&secondChoice=='rock'){
    final.innerHTML='first won'
}
else if(firstChoice=='rock'&&secondChoice=='scs'){
    final.innerHTML=`first won`
}
else if(firstChoice=='paper'&&secondChoice=='scs'){
    final.innerHTML='second won'
}
else if(firstChoice=='scs'&&secondChoice=='rock'){
    final.innerHTML='second won'
}
else if(firstChoice=='scs'&&secondChoice=='paper'){
    final.innerHTML='first won'
}
}

////////////////////
let options=['O','X']
const combs = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]
let divs=[...document.querySelectorAll('.tic-tac div')]
let firstChecked="X"
console.log(divs)
divs.forEach(div=>div.addEventListener('click',(e)=>{

let reversed=options.reverse()

e.target.innerHTML=reversed[0]

//	[0, 1, 2],
if(divs[0].innerHTML=='X'&&divs[1].innerHTML=='X'&&divs[2].innerHTML=='X'){
divs[0].style.backgroundColor='red'
divs[1].style.backgroundColor='red'
divs[2].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[0].innerHTML=='O'&&divs[1].innerHTML=='O'&&divs[2].innerHTML=='O'){
divs[0].style.backgroundColor='green'
divs[1].style.backgroundColor='green'
divs[2].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}
//////////
//	[3, 4, 5],
if(divs[3].innerHTML=='X'&&divs[4].innerHTML=='X'&&divs[5].innerHTML=='X'){
divs[3].style.backgroundColor='red'
divs[4].style.backgroundColor='red'
divs[5].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[3].innerHTML=='O'&&divs[4].innerHTML=='O'&&divs[5].innerHTML=='O'){
divs[3].style.backgroundColor='green'
divs[4].style.backgroundColor='green'
divs[5].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}
///
///[6, 7, 8],


if(divs[6].innerHTML=='X'&&divs[7].innerHTML=='X'&&divs[8].innerHTML=='X'){
divs[6].style.backgroundColor='red'
divs[7].style.backgroundColor='red'
divs[8].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[6].innerHTML=='O'&&divs[7].innerHTML=='O'&&divs[8].innerHTML=='O'){
divs[6].style.backgroundColor='green'
divs[7].style.backgroundColor='green'
divs[8].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}

///[0, 3, 6],

if(divs[0].innerHTML=='X'&&divs[3].innerHTML=='X'&&divs[6].innerHTML=='X'){
divs[0].style.backgroundColor='red'
divs[3].style.backgroundColor='red'
divs[6].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[0].innerHTML=='O'&&divs[3].innerHTML=='O'&&divs[6].innerHTML=='O'){
divs[0].style.backgroundColor='green'
divs[3].style.backgroundColor='green'
divs[6].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}

///[1, 4, 7],
if(divs[1].innerHTML=='X'&&divs[4].innerHTML=='X'&&divs[7].innerHTML=='X'){
divs[1].style.backgroundColor='red'
divs[4].style.backgroundColor='red'
divs[7].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[1].innerHTML=='O'&&divs[4].innerHTML=='O'&&divs[7].innerHTML=='O'){
divs[1].style.backgroundColor='green'
divs[4].style.backgroundColor='green'
divs[7].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}

//[2, 5, 8],

if(divs[2].innerHTML=='X'&&divs[5].innerHTML=='X'&&divs[8].innerHTML=='X'){
divs[2].style.backgroundColor='red'
divs[5].style.backgroundColor='red'
divs[8].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[2].innerHTML=='O'&&divs[5].innerHTML=='O'&&divs[8].innerHTML=='O'){
divs[2].style.backgroundColor='green'
divs[5].style.backgroundColor='green'
divs[8].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}

//	[0, 4, 8],
if(divs[0].innerHTML=='X'&&divs[4].innerHTML=='X'&&divs[8].innerHTML=='X'){
divs[0].style.backgroundColor='red'
divs[4].style.backgroundColor='red'
divs[8].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[0].innerHTML=='O'&&divs[4].innerHTML=='O'&&divs[8].innerHTML=='O'){
divs[0].style.backgroundColor='green'
divs[4].style.backgroundColor='green'
divs[8].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}

//[2, 4, 6]

if(divs[2].innerHTML=='X'&&divs[4].innerHTML=='X'&&divs[6].innerHTML=='X'){
divs[2].style.backgroundColor='red'
divs[4].style.backgroundColor='red'
divs[6].style.backgroundColor='red'
divs.forEach(div=>div.style.pointerEvents='none')
}
else if(divs[2].innerHTML=='O'&&divs[4].innerHTML=='O'&&divs[6].innerHTML=='O'){
divs[2].style.backgroundColor='green'
divs[4].style.backgroundColor='green'
divs[6].style.backgroundColor='green'
divs.forEach(div=>div.style.pointerEvents='none')
}
e.target.style.pointerEvents='none'
}

))
document.querySelector('#refresh').addEventListener('click',()=>{
divs.map(div=>{
    div.innerHTML=''
    div.style.backgroundColor='rgb(109, 184, 184)'
    div.style.pointerEvents='auto'
    options=['O','X']
})})
