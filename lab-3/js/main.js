
// TASK 1 

const resource = document.getElementById('resources');
const showResource = document.getElementById('show-resources');
console.log(showResource)
showResource.addEventListener('click',onShowResource);
function onShowResource(event){
    event.preventDefault();
   resource.classList.remove('d-none');
}

// TASK 2
resource.addEventListener('click',onAddClass);

function onAddClass(event){
    event.target.classList.add('fw-bold');
}

// TASK 3
resource.addEventListener('mouseout', onRemoveClass);

function onRemoveClass(event){
    event.target.classList.remove('fw-bold');
}

// TASK 4
resource.addEventListener('click', addItalic);

function addItalic(event){
    event.target.classList.add('fst-italic');
}

// TASK 5
resource.addEventListener('mouseout',removeItalic);

function removeItalic(event){
   event.target.classList.remove('fst-italic')
}