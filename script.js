

document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    const card = document.getElementById('card');
    card.innerHTML = 
        <h2>${name}</h2>
        <p>${number}</p>
    ;
});