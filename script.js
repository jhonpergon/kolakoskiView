let botao = document.getElementById("btn");
let velocidade = 1000;
let oneTwo = document.getElementById('UmDois');

const memoria = document.getElementById("result1");
const generation = document.getElementById("result2");
const sequence = document.getElementById("result3");

var counter = 1;
var capturando = "";

var k = 0;
var numerais = ["1", "2"];
var memoriaCache = [];
var kolakoski = [];
var addx = numerais[k];


function binario(){
    if (numerais[k] == 1){
        oneTwo.style.color = "blue";
        oneTwo.innerHTML = numerais[k];
        k++;
      }else{
        oneTwo.style.color = "red";
        oneTwo.innerHTML = numerais[k];
        k--;
      }
}

function myTimer() {
  capturando = document.getElementById('valor').value;
    if(counter < capturando){
      counter++;
    }else{
      pararTudo();
    }
}


let styleNumber = 0;
let lastArray = 0;

function imprimirArray(array) {

  let arrayx = [];

  if (lastArray > 0) {
    let removeLast = array.slice(lastArray);
    arrayx = removeLast;
  }else{
    arrayx = array;
  }

  let atual = 0;

  for (let i = 0; i < arrayx.length; i++) {
    if (arrayx[i] == 1) {
      if (atual == arrayx[i]){
        styleNumber = styleNumber-1;
        let roomSelf = document.getElementById("k"+styleNumber);
        roomSelf.innerHTML += ", <b style='color:blue'>"+arrayx[i]+"</b>";
        atual = arrayx[i];
        styleNumber++;
      }else{
        generation.innerHTML += "<span class='rooms' draggable='true' style='--i:"+styleNumber+";' id='k"+styleNumber+"'><b style='color:blue'>"+arrayx[i]+"</b></span>, ";
        atual = arrayx[i];
        styleNumber++;
      }
    }else{
      if (atual == arrayx[i]){
        styleNumber = styleNumber-1;
        let roomSelf = document.getElementById("k"+styleNumber);
        roomSelf.innerHTML += ", <b style='color:red'>"+arrayx[i]+"</b>";
        atual = arrayx[i];
        styleNumber++;
      }else{
        generation.innerHTML += "<span class='rooms' draggable='true' style='--i:"+styleNumber+";' id='k"+styleNumber+"'><b style='color:red'>"+arrayx[i]+"</b></span>, ";
        atual = arrayx[i];
        styleNumber++;
      }
    }
    
  }

  lastArray = array.length;
}


let n = 0;

function kolakoskiSequence(){
  if(memoriaCache.length < 1){
    for (i = numerais[k]; i > 0; i--) {
      memoriaCache.push(numerais[k])
      kolakoski.push(numerais[k])
    } 
    memoria.innerHTML = memoriaCache;
    memoriaCache.shift();
    imprimirArray(kolakoski);
    if (kolakoski[n] == 1) {
      sequence.innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:blue'>"+kolakoski[n]+"</b></span>, ";
    }else{
      sequence.innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:red'>"+kolakoski[n]+"</b></span>, ";
    }
    document.getElementById("continum").innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:gray'>"+counter+"</b></span>, "; 
    n++;
  }else{
    for (i = memoriaCache[0]; i > 0; i--) {
      memoriaCache.push(numerais[k])
      kolakoski.push(numerais[k])
    } 
    memoria.innerHTML = memoriaCache;
    memoriaCache.shift();
    imprimirArray(kolakoski);
    if (kolakoski[n] == 1) {
       sequence.innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:blue'>"+kolakoski[n]+"</b></span>, ";
    }else{
      sequence.innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:red'>"+kolakoski[n]+"</b></span>, ";
    }
    document.getElementById("continum").innerHTML += "<span class='ksRooms' draggable='true' style='--i:"+n+";'><b style='color:gray'>"+counter+"</b></span>, "; 
    n++;
  }
}

var timer1;
var timer2;
var timer3;

function start(){
  timer1 = setInterval(kolakoskiSequence,velocidade);
  timer2 = setInterval(binario,velocidade);
  timer3 = setInterval(myTimer,velocidade);
  botao.innerText ="Em processo...";
}


function pararTudo(){
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);

  botao.innerText ="Recomeçar";
  botao.onclick = clearAll;
  oneTwo.style.color = "gray";
  let startEffect = document.getElementById("startEffect");
  startEffect.innerHTML = `
  .wavy-text .rooms {
    animation: wave1 5s ease-in-out infinite;
    animation-delay: calc(var(--i) * .5s);
    --i: 0;
  }

  .wavy-text .ksRooms {
    animation: wave2 5s ease-in-out infinite;
    animation-delay: calc(var(--i) * .5s);
    --i: 0;
  }

  `; 
}

function clearAll() {
  window.location.reload();
  startEffect.innerHTML = ``;
}


