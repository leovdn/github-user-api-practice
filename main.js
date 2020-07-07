const divContent = document.querySelector('.content');
const btnElement = document.querySelector('#btn');
const inputElement = document.querySelector('#username');
const listElement = document.querySelector('ul');


btnElement.addEventListener('click', inputText);

function inputText() {
  listElement.innerHTML = "";
  const user = inputElement.value;
  puxarDados(user);  
}


async function puxarDados(user) { 
  const dadosResponse = await fetch(`https://api.github.com/users/${user}`);
  const dadosJSON = await dadosResponse.json();
  
  
  for (let [key, value] of Object.entries(dadosJSON)) {
    const liItem = createList(key, value);
    divContent.appendChild(listElement);
    listElement.appendChild(liItem);
  }    
  
}

function createList(key, value) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `<h3>${key}</h3> <p>${value}</p>`;

  return liElement;
}



  
  
  
  
