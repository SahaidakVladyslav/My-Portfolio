console.log('mamba')



// portfolio__item--content
// portfolio--label
const filterBox = document.querySelectorAll('.project__item');
const itemEl = document.querySelectorAll('.portfolio__item--content')


const filterBtn = (event) => {
    if (event.target.tagName !== "BUTTON") return false;



    let filterClass = event.target.dataset['btn'];
    console.log(Array.from(itemEl)[0].classList.contains(filterClass))

    console.log(filterClass)
    itemEl.forEach(item => {
        if (item.classList.contains(filterClass)) {
            console.log(item)
        }
    })
}

// Application
//Marketing
//Web-site
//Design
document.querySelector('body')
    .addEventListener('click', event => {
        filterBtn(event)
    });
