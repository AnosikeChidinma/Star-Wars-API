//let button = document.querySelector(".btn");

fetch('https://swapi.dev/api/people')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.results.forEach(character => {
      let imagePath = `./assets/Images/${character.name}.jpeg`;
      let characterName = `<li>${character.name}</li>`;
      let characterInfo = `Gender: ${character.gender}, Height: ${character.height} cm`;
      // let buttonElement = `<button class="button" onClick="showCharacterInfo('${character.name}', '${characterInfo}')">${character.name}</button>`;
      let buttonElement = `
      <div class = "box">
         <li class="Container">
          <div class="Images">
           <img class="image" src="${imagePath}" alt="${character.name}"> 
           </div>
            
           <button onClick="showCharacterInfo('${character.name}', '${characterInfo}')">${characterName}</button>
          
           <div class="info"></div>
         </li>
      </div>
       `;
      document.querySelector('ul').insertAdjacentHTML('beforeend', buttonElement);
    })
    console.log(data);
  })
  .catch(error => console.log(error));

function showCharacterInfo(name, info) {
  alert(`${name}: ${info}`);
}


// let button = document.querySelector(".btn");

// fetch('https://swapi.dev/api/people')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     data.results.forEach(character => {
//       let imagePath = `./assets/images/${character.name.toLowerCase()}.jpg`;
//       let characterName = `<li>${character.name}</li>`;
//       let characterInfo = `Gender: ${character.gender}, Height: ${character.height} cm`;
//       let buttonElement = `
//         <li>
//           <img src="${imagePath}" alt="${character.name}">
//           <button onClick="showCharacterInfo('${character.name}', '${characterInfo}')">${character.name}</button>
//           <div class="info"></div>
//         </li>
//       `;
//       document.querySelector('ul').insertAdjacentHTML('beforeend', buttonElement);
//     })
//     console.log(data);
//   })
//   .catch(error => console.log(error));

// function showCharacterInfo(name, info) {
//   alert(`${name}: ${info}`);
// }





