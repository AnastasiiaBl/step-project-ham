
// OUR AMAZING WORK
let list = document.querySelector('.amazing-work-list');
let items = document.querySelectorAll('.visible-content');
let listTitels = document.querySelectorAll('.amazing-work-list-title');

// фільтр по Атрибутам
list.addEventListener('click', filterWorks);

function filterWorks (e) {
    let targetId = e.target.getAttribute('data-id');
    if (targetId) {
        let targetTitle = e.target;

    // виділення активного блоку при кліку
    listTitels.forEach(listTitle => listTitle.classList.remove('active'));
    targetTitle.classList.add('active');

    if (targetId === 'all') {
        items.forEach((item) => {
                item.style.display = 'block';
        })
    } else {
        items.forEach((item) => {
            if (item.getAttribute('data-id') === targetId) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    }
}
}


// Кнопка Load More
document.querySelector('.amazing-work_btn').addEventListener('click', (event) => {
        document.querySelector(".amazing-work_btn p").style.display = "none";
        document.querySelector(".amazing-work_btn span").style.display = "flex";
        setTimeout(loadMore, 2000);
});

function loadMore() {
    let btn = document.querySelector('.amazing-work_btn');
    let hiddenContent = document.querySelector('.amazing-work-content-load');
    btn.style.display = 'none';
    hiddenContent.classList.add('active');
};

