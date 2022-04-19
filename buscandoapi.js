 'use strich'




async function pesquisandoHeroi(nomeheroi){

const url = `https://www.superheroapi.com/api.php/1379294532539381/search/${nomeheroi}`;

const reponse = await fetch(url);

const data = await reponse.json();

return data;

}



function criarimg({image, biography, powerstats,name}){

    const card = document.createElement("div");
    console.log(powerstats)

       card.classList.add('.card');
    
       card.innerHTML = `
       <div class="container">
       <div class="card">
            <div class="imgbx">
                <h1>${name}</h1>
                <img src="${image.url}" alt="">
                <h3>  Read more..</h3>
            </div>
            <div class="contet">
                <h2>${biography['full-name']}</h2>
                
                <p>first-apparence: ${biography['full-name']}</p>
                <p> intelligence : ${powerstats.intelligence}</p>
                <p> combat : ${powerstats['combat']}</p>
                <p> power : ${powerstats['power']}</p>
                <p>speed : ${powerstats['speed']}</p>
                <p>strength : ${powerstats['strength']}</p>
            </div>
          </div>
          </div>
           `

           return card;
};


async function imgheroi(){

    const nomeheroi = document.getElementById('heroi').value;
    const container = document.getElementById("container");

    const reposta = await pesquisandoHeroi(nomeheroi);
  
    const tagimg = reposta.results.map(criarimg);

    const bla = reposta.results;
    
   console.log(bla);
  
   container.replaceChildren(...tagimg);

};





document.getElementById('pesquisar').addEventListener('click', imgheroi);

document.addEventListener("keypress", function(imgheroi) {
    if(imgheroi.key === 'Enter') {
    
        var btn = document.querySelector("#pesquisar");
      
      btn.click();
    
    }
  });









