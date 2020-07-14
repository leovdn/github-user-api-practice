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
  
  const {name, login, avatar_url, repos_url} = dadosJSON;
  const liItem = createList(name, login, avatar_url, repos_url);
    divContent.appendChild(listElement);
    listElement.appendChild(liItem);
  
}

function createList(name, login, avatar_url, repos_url) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
  <h3><img src="${avatar_url}"></h3> 
  <p>${name}</p>
  <p>${login}</p>
  <a href="${repos_url}">Repositórios</a>
  `;

  return liElement;
}



  
  
  
  
