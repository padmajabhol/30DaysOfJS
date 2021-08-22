"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//most code is synchronous;
//synchronous code is executed line by line
//each line of code waits for previous line to finish
//long-running operations block code execution

//asynchronous code is executed after a task that runs in the background finishes
//asyn code is non -blocking
//execution doesn't wait for an asynchr task to finish its work

//AJAX- allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically

const renderCountry = function (data, className = "") {
  const html = ` <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    // console.log(this.responseText); //points to request, the property responseText will only be set once the data has arrived.
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // console.log(this.responseText);
      const data2 = JSON.parse(this.responseText); //one result or error if u use array destructuring
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("bharat");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("germany"); //will call the countries in a particular sequence

//Callback Hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
    }, 1000);
    setTimeout(() => {
      console.log("4 second passed");
    }, 1000);
  }, 1000);
}, 1000);
