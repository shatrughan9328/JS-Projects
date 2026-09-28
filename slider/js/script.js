let a=document.getElementById('img');
let images=['./images/slidder1.jpg','./images/slidder2.jpg'];
let i=0;
function nxt(){
    i++;
    // console.log(a);
    if(i==images.length){
        i=0;
    }

    a.src=images[i];

}

function pre(){
    i--;
    if(i<0){
        i=images.length-1;
    }
    // console.log(a);
    a.src=images[i];
}