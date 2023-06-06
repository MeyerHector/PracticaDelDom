const cartasContainer = document.getElementById('cards')

const carta = {
    title: 'piton',
    description: 'pyton es un lenguaje de programacion',
    image: 'https://s3.techplay.jp/tp-images/column/1429/6375fc39bf885c1ec9d99445f8720127f1f728ac.png?w=600'
}
const carta1 = {
    title: 'javascript',
    description: 'JS es un lenguaje de programacion',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
}

const carta2 = {
    title: 'Java',
    description: 'Java es un lenguaje de programacion',
    image: 'https://www.manualweb.net/img/logos/java.png'
}

const carta3 = {
    title: 'C++',
    description:'C++ es un lenguaje de programacion',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
}

const conjuntoDeCartas = [carta, carta1, carta2]


conjuntoDeCartas.forEach((card) => {
    cartasContainer.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${card.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
      <p class="card-text">${card.description}</p>
    </div>
    </div>`
    
}) 


