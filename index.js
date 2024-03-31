const typing = document.getElementById('typing');
const text = 'I am a data enthusiast and I have been working on AI/ML projects.';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typing.textContent += text[index];
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();