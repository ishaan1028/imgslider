
slides=["/images/11.jpg","/images/22.jpg","/images/33.jpg"];
let i=0;
let kkk;
let timer;

kkk=function(){
document.querySelector("#imgid").src=slides[i];
i++;
i=i%3;

timer=setTimeout(kkk,1000*2);

};

function stop(){
clearTimeout(timer);
}

function start(){
kkk();
}

function next(){
    clearTimeout(timer);
    i++;
    i=i%3;
    document.querySelector("#imgid").src=slides[i];

}

function prev(){
    clearTimeout(timer);
    i--;
    if(i<0){
        i=2;
    }
    
    document.querySelector("#imgid").src=slides[i];

}

document.onload(kkk());