`use strict`
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

navLinksItems.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
    });
});

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let agree = document.getElementById('agree').checked;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('name-error').textContent = 'Заповніть це поле';
    } else {
        document.getElementById('name').style.borderColor = '';
        document.getElementById('name-error').textContent = '';
    }

    if (email === '') {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email-error').textContent = 'Введіть електронну пошту';
    } else if (!emailPattern.test(email)) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email-error').textContent = 'Введіть коректну електронну пошту';
    } else {
        document.getElementById('email').style.borderColor = '';
        document.getElementById('email-error').textContent = '';
    }

    if (!agree) {
        document.getElementById('agree-label').style.color = 'red';
    } else {
        document.getElementById('agree-label').style.color = '';
    }

    return false;
}












