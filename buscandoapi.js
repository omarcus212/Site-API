'use strich'

const nomeheroi = document.getElementById('heroi');


async function pesquisandoHeroi(nomeheroi){

const url = `https://www.superheroapi.com/api.php/1379294532539381/search/${nomeheroi}`;

const reponse = await fetch(url);

const data = await reponse.json();



return data;

}

async function heroi(){
const nomeheroi = document.getElementById('heroi').value;


const reposta = await pesquisandoHeroi(nomeheroi);

const tagimg = reposta.results;

const img = tagimg[1].image;

const bioheroi = tagimg[1].biography;

const nmheroi = tagimg[1].name;

console.log(nmheroi);
console.log(bioheroi);
console.log(img);

// const urlimagem = await criarimg(urlimagem);

// const enviarimg = criarimg(img);


}



// const criarimg = (imagem) =>{

//     const img = document.createElement('img');

//     img.src = imagem;

//     return img;



// }


// function carregarimg (){

// const img = criarimg();

// const url = document.getElementById('imagem-container');

// url.innerHTML = `
// <div id="imagem-container">
//             <img src="${img}" alt="">
//         </div>

// `


// }


// carregarimg();
document.getElementById('pesquisar').addEventListener('click', heroi);
















