const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
}, {threshold: .12});

document.querySelectorAll('.reveal,.gallery-item').forEach(el => observer.observe(el));


const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onclick = () => {
        lightbox.classList.add('show');
        lightImg.src = img.src
    }
});

lightbox.onclick = () => lightbox.classList.remove('show');


const popup = document.getElementById('culture-popup');
const popupImg = document.getElementById('culture-popup-img');
const popupTitle = document.getElementById('culture-popup-title');
const popupNote = document.getElementById('culture-popup-note');

document.querySelectorAll('.culture-word').forEach(word => {
    word.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = word.getBoundingClientRect();
        popupTitle.textContent = word.textContent;
        popupNote.textContent = word.dataset.note || '';
        popupImg.src = word.dataset.img || 'images/boat-stage.jpg';
        popup.style.left = Math.min(rect.left, window.innerWidth - 330) + 'px';
        popup.style.top = Math.min(rect.bottom + 12, window.innerHeight - 300) + 'px';
        popup.classList.add('show')
    })
});

document.addEventListener('click', () => popup.classList.remove('show'));