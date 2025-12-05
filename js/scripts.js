//inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

// get all sections to watch
const myListOfItems = document.querySelectorAll('main section');

// observer settings
let observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5 // 50% visible = highlight
};

// create the observer
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target);
        }
    });
}, observerOptions);

// highlight function
function hiliteNav(x) {
    const oldActive = document.querySelector('.active');
    if (oldActive) oldActive.classList.remove('active');

    let theid = x.getAttribute('id');
    let newActiveLink = document.querySelector(`[href="#${theid}"]`);
    newActiveLink.parentElement.classList.add('active');
}

// start watching all sections
myListOfItems.forEach(item => {
    myObserver.observe(item);
});
