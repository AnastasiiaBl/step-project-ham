
// Our SERVICES
document.querySelector('.service-title').classList.add('active');
document.querySelector('.service-content').classList.add('active');

function selectContent (e) {
    let target = e.target.dataset.target;
    
    document.querySelectorAll('.service-title, .service-content').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelector('.' + target).classList.add('active');
}

document.querySelectorAll('.service-title').forEach(el => {
    el.addEventListener('click', selectContent);
})

