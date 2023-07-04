const quotes=["We write to taste life twice, in the moment and in retrospect.",
"One day I will find the right words, and they will be simple.",
"You never have to change anything you got up in the middle of the night to write.",
"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
"I can shake off everything as I write; my sorrows disappear, my courage is reborn."
];
const writer=["Anaïs Nin","Jack Kerouac","Saul Bellow","Robert Frost","Anne Frank"];
const bgclr=["#f4a33a","#3af4af","#3adaf4","#ac3af4","#f43a65"];
const lighhtclr=["#fce3c4","#bffbe5","#bef1f9","#e8c3ff","#f9c0cd"];
const btngenerator=document.getElementById('newquote');
const teext=document.getElementById('textualQuote');
const names=document.getElementById('name');
const bodi=document.getElementsByTagName('body')[0];
const box=document.getElementById('outer');
window.addEventListener("load",myfunc);
function myfunc(){
    let dates=new Date();
    let deci=dates.getHours();
    let decider=document.getElementById('decidor');
    if(deci>=6 && deci<=11){
        decider.innerText="morning";
    }
    else if(deci>=12 && deci<=17){
        decider.innerText="afternoon";
    }
    else if(deci>=18 && deci<=23 || deci>=24 && deci<=5){
        decider.innerText="night";
    }
}

btngenerator.addEventListener("click",generatequote);
function generatequote(){
    myfunc();
    let number=quotes.length;
    let secondno=Math.floor(Math.random() * number);
    teext.innerText=quotes[secondno];
    names.innerText=writer[secondno];
    bodi.style.backgroundColor=bgclr[secondno];
    bodi.style.color=bgclr[secondno];
    box.style.backgroundColor=lighhtclr[secondno];
    btngenerator.style.backgroundColor=bgclr[secondno];
}
    