const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', () => {
    setTimeout(() => {
        const text = document.getElementById('text');
        text.textContent = "ボタンをクリックしました。";
    }, 2000);
});