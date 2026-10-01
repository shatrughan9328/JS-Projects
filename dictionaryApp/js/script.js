// let word=document.getElementById('word').value.trim().tolowercase();
let btn=document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     let word=document.getElementById('word').value.trim().tolowercase();
//     alert(word);
// })

async function search(){
    // alert('hey');
    let word=document.getElementById('word').value.trim().toLowerCase();
    const url=`https://freedictionaryapi.com/api/v1/entries/en/${word}`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    // document.getElementById('def').innerHTML=data.entries[0].senses[0].definiton;
    // document.getElementById('def').innerHTML=data.entries[0].partOfSpeech;
    // document.getElementById('def').innerHTML=data.entries[0].;
}