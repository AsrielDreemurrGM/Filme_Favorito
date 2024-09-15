document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length;i ++) {
        questions[i].addEventListener('click', openAndClose);
    }
})

function openAndClose(element) {
    const nameOfClass = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(nameOfClass);
}