const toggleBtn = document.querySelector('.headerbar-togleBtn');
const menuEl = document.querySelector('.header-menu');
const utilityEl = document.querySelector('.header-utility');

toggleBtn.addEventListener('click', () => {
    menuEl.classList.toggle('active');
    utilityEl.classList.toggle('active');
});
