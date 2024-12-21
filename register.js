document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content > div');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => content.style.display = 'none');
            const activeTab = tab.querySelector('a').getAttribute('href').substring(1);
            document.getElementById(activeTab).style.display = 'block';
        });
    });
    // Form field interaction
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const label = input.previousElementSibling;
            label.classList.add('active');
            label.classList.add('highlight');
        });

        input.addEventListener('blur', () => {
            if (input.value === "") {
                const label = input.previousElementSibling;
                label.classList.remove('active');
                label.classList.remove('highlight');
            }
        });
    });

    // Handle form submissions
    const signupForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
    document.getElementById('signup').style.display = 'block';
});
