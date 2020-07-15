const divCard = document.querySelector('.card');
const divInfo = document.querySelector('.user-info');
const divData = document.querySelector('.user-data');
const btnElement = document.querySelector('#btn');
const inputElement = document.querySelector('#username');
const infoListElement = document.querySelector('.info-list');
const dataListElement = document.querySelector('.data-list');

divCard.appendChild(divInfo);
divCard.appendChild(divData);

btnElement.addEventListener('click', inputText);

function inputText() {
  // listElement.innerHTML = "";
  const user = inputElement.value;
  puxarDados(user);  
}


async function puxarDados(user) { 
  const dadosResponse = await fetch(`https://api.github.com/users/${user}`);
  const dadosJSON = await dadosResponse.json();
  
  const {name, login, avatar_url, bio, public_repos, followers, following} = dadosJSON;
  createDataList(public_repos, followers, following);
    divData.appendChild(dataListElement);
  createInfoList(name, login, avatar_url, bio);
  divInfo.appendChild(infoListElement);
}

function createDataList(public_repos, followers, following) {

  dataListElement.innerHTML = `
    <li><span>${public_repos}</span>Repositórios</li>
    <li><span>${followers}</span>Followers</li>
    <li><span>${following}</span>Following</li>
  `;

  return dataListElement;
}

function createInfoList(name, login, avatar_url, bio) {

  infoListElement.innerHTML = `
    <img src="${avatar_url}" alt="">
    <p>${login}</p>
    <h2>${name}</h2>
    <p>${bio}</p>
  `;

  return infoListElement;
}




  
  
  
  
