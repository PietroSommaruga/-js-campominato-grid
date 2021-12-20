// definisco il container
let containerElement = document.querySelector('.container-box');

// definisco i 3 button
const button1 = document.getElementById('livello-1');
const button2 = document.getElementById('livello-2');
const button3 = document.getElementById('livello-3');


// definisco la funzione per creare i box
function createNewBox(container) {
    const color = document.createElement('div');
    color.className = 'box';
    color.innerHTML += i;
    color.addEventListener ('click', function(){
        color.classList.add('blue');
    })
    container.append(color);
}

function createContainer(numMax, container){
    container.innerHTML = '';
    for (i=1; i <= numMax; i++){
        createNewBox(container);
    }
};

//  creo una funzione che elimina gli altri due livelli
//  e dopo aggiunge il livello a cui fa riferimento 
button1.addEventListener ('click', function(){
    containerElement.classList.remove( 'level-2', 'level-3')
    containerElement.classList.toggle('level-1');
    createContainer(100, containerElement);
})

button2.addEventListener ('click', function(){
    containerElement.classList.remove('level-1',  'level-3')
    containerElement.classList.toggle('level-2');
    createContainer(81, containerElement);
})

button3.addEventListener ('click', function(){
    containerElement.classList.remove('level-1', 'level-2')
    containerElement.classList.toggle('level-3');
    createContainer(49, containerElement);
})