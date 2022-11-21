document.getElementById('buscador__button').addEventListener('click', buscarDatos);

function buscarDatos() {
    let cocktail = document.getElementById('buscador__input').value;
    fetch('https://www.cocktailDBclone.somee.com/api/cocktail/buscar/' + cocktail)
    .then(response => response.json())
    .then(data => console.log(data));
}
