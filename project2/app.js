let openButton = document.querySelector('#open-btn');
let closeButton = document.querySelector('#close-btn');
let modalContainer = document.querySelector('.modal-container');

openButton.addEventListener('click',function(){
    modalContainer.style.display = 'block';
});

closeButton.addEventListener('click',function(){
    modalContainer.style.display = 'none';
})

window.addEventListener('click',function(e){
    if (e.target===this.document.body){
        modalContainer.style.display = 'none'
    }
})