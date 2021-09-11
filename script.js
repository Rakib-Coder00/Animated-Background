const sun = document.querySelector('.sun');
const body = document.querySelector('body');
// sun.onclick = function () {
//     body.classList.toggle('dark')    
// }

sun.addEventListener('click', () =>{
    body.classList.toggle('dark')
})