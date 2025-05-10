const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');

next.addEventListener('click', () => {
const first = slide.querySelector('.item');
slide.appendChild(first);
});

prev.addEventListener('click', () => {
const items = slide.querySelectorAll('.item');
slide.prepend(items[items.length - 1]);
});