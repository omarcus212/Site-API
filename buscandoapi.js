 'use strich'




async function pesquisandoHeroi(nomeheroi){

const url = `https://www.superheroapi.com/api.php/1379294532539381/search/${nomeheroi}`;

const reponse = await fetch(url);

const data = await reponse.json();

return data;

}



function criarimg({image, biography}){

    const card = document.createElement("div");

       card.classList.add('cardheroi');
    
       card.innerHTML = `
    
       <div class="cardheroi">
       
           <h3>${biography["full-name"]}</h3>
           <img src="${image.url}" class="front"></img>
           `


           return card;
};


async function imgheroi(){

    const nomeheroi = document.getElementById('heroi').value;
    const container = document.getElementById("imagem-container");

    const reposta = await pesquisandoHeroi(nomeheroi);
  
    const tagimg = reposta.results.map(criarimg);
    
   console.log(tagimg);
  
   container.replaceChildren(...tagimg);

};





document.getElementById('pesquisar').addEventListener('click', imgheroi);

document.addEventListener("keypress", function(imgheroi) {
    if(imgheroi.key === 'Enter') {
    
        var btn = document.querySelector("#pesquisar");
      
      btn.click();
    
    }
  });









