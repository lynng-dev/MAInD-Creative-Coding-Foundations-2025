// console.log('ciao')

// const HOBBIES = ["judo", "boxe", "cycling"];

// console.log(HOBBIES.length);
// console.log(HOBBIES[0])


// const PERSON = {
//     name: "Sasha",
//     lastname: "Bravo",
//     hobbies: HOBBIES
// }
// console.log(PERSON)

// console.log(PERSON.name)

// const CONTAINER =document.getElementById ('container')

// for (hobby of PERSON.hobbies){

//     const ITEM = document.createElement('li');
//     ITEM.textContent = hobby;

//     CONTAINER.appendChild(ITEM);
// }

// fetch('/data/data.json') // get the data from an external source
//   .then(response => response.json()) // parse/convert the data in JavaScript format

//   .then(data => console.log(data)) // dispay the data in the console

//   .catch(error => displayError(error)); // display an error if the data cannot be loaded

//   function displayData(data){
//     console.log(data)

//     for (item of data.hobbies){

//         counter += 1;

//         const ITEM = document.createElement('li');
//         //  ITEM.textContent = `${counter}: ${hobby}`;
//          CONTAINER.appendChild(ITEM);

//     }

//   }

//     function displayError(error){
//     console.log(error)

//   }