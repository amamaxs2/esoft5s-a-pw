var searchParams = new URLSearchParams(location.search);

var titulo = searchParams.get("evolucao");

document.querySelector("title").innerText += `${titulo}`
document.querySelector("h2").innerText += ` ${titulo}`

const req = fetch(`https://pokeapi.co/api/v2/pokemon/${titulo}`)
    .then(data => {
        return data.json()
    })
    .then(data => {
        document.getElementById("imgPoke").innerHTML = `<img id="${titulo}" src="${data.sprites.front_default}" alt="${titulo}">`
    })