const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const name = params.get("name");

console.log(name);

const surname = params.get("surname");

console.log(surname);