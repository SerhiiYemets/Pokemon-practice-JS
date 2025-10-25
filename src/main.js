import axios from "axios";

import './css/styles.css'

// const url = 'https://jsonplaceholder.typicode.com/todos';

// async function foo() {
//     const response = await axios(url);
//     return response.data;

// }

// foo()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error.message);

//     })

// async function foo() {
//     try {const response = await axios(url);
//         console.log(response.data);

//     } catch (error) {
//         console.log(error.message);
//     }

// }

// foo()

// async function fetchData() {
//     const result = await axios(url);
//     return result.data;
// }

// async function foo() {
//     try {
//         const data = await fetchData();
//         console.log("foo", data);

//     } catch (error) {
//         console.log(error.message);

//     } finally {
//         console.log("finally");
//     }
// }
// foo();

// const url = 'https://jsonplaceholder.typicode.com/todos';

// async function getTodos() {

//     const { data : todo1 } = await axios(`${url}/1`);
//     const { data: todo2 } = await axios(`${url}/2`);
//     const { data: todo3 } = await axios(`${url}/3`);

//     return [todo1, todo2, todo3];

// }
// getTodos()
//     .then(data => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const todos = todosArr.map(async (item) => {
//         const response = await axios(`${url}/${item}`);
//         return response.data;
//     })

//     const result = await Promise.all(todos);
//     return result;
// }

// getTodos()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })



/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const form = document.querySelector(".search-form");
const container = document.querySelector(".card-container");
const loader = document.querySelector(".loader")

form.addEventListener("submit", onSearch);

async function fetchPokemon(pokemonName) {
    const response = await axios(`${BASE_URL}${pokemonName}`);
    return response.data;
}

async function onSearch(event) {
    event.preventDefault();
    loader.classList.remove("hidden");

    const queryValue = event.currentTarget.elements.query.value.trim();
    
    try {
        const data = await fetchPokemon(queryValue);
        container.innerHTML = rendenPokemonCar(data);
        
    } catch(error) {
        onFetchError(error.message);

    } finally {
        event.target.reset();
        loader.classList.add("hidden");
    }
}

// створемо картку з нашим покемоном
function rendenPokemonCar({ name, weight, height, sprites, abilities }){
    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
        `).join("");
    
    return `
        <div class="card">
            <div class="card-img-top">
            <img src="${sprites.front_default}" alt="${name}"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Ім'я: ${name}</h3>
            <p class="card-text">"Вага": ${weight}</p>
            <p class="card-text">"Зріст": ${height}</p>
        </div>
        
        <p class="card-text">
            <h4>Вміння:</h4>
            <ul>
                ${abilitiesList}
            </ul>
            </p>
    `
}

function onFetchError(str) {
    alert(str);
}