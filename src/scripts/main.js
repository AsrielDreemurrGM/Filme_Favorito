document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    for (let i = 0; i < questions.length;i ++) {
        questions[i].addEventListener('click', openAndClose);
    }

    window.addEventListener('scroll', function() {
        const scrollHeight = window.scrollY;

        if (scrollHeight < heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    })
})

function openAndClose(element) {
    const nameOfClass = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(nameOfClass);
}

function hideHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}