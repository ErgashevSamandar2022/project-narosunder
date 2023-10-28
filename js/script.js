'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const menuBars = document.querySelector('.menu_barc');
    const ul = document.querySelector('.list_items_active');
    const imageIcons = document.querySelector('.image_icons');
    const fName_lName = document.getElementById('fName_lName'),
        email = document.getElementById('email'),
        projectName = document.getElementById('projectName'),
        text_span = document.querySelector('.text_span'),
        email_span = document.querySelector('.email_span'),
        project_span = document.querySelector('.project_span'),
        submit = document.getElementById('submit'),
        textarea = document.getElementById('textarea'),
        textarea_span = document.querySelector('.textarea_span');
    menuBars.addEventListener('click', () => {
        if (ul.classList.contains('block')) {
            ul.classList.add('none');
            ul.classList.remove('block');
        } else {
            ul.classList.remove('none');
            ul.classList.add('block');
        }
    });

    window.addEventListener('scroll', () => {
        let scrollPage = window.pageYOffset;
        if (scrollPage > 100) {
            imageIcons.style.display = 'block';
            imageIcons.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        } else {
            imageIcons.style.display = 'none';
        }
    });

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (fName_lName.value.trim() == '') {
            text_span.innerHTML = "come on, you have a name, don't you?";
        } else {
            text_span.innerHTML = '';
        }
        if (email.value.trim() == '') {
            email_span.innerHTML = 'no email, no message';
        } else {
            email_span.innerHTML = '';
        }
        if (projectName.value.trim() == '') {
            project_span.innerHTML = "come on, you have a subject, don't you?";
        } else {
            project_span.innerHTML = '';
        }
        if (textarea.value.trim() == '') {
            textarea_span.innerHTML =
                'um...yea, you have to write something to send this form.';
        } else {
            textarea_span.innerHTML = '';
        }
    });
});
