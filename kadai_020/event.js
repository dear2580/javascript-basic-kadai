const btn = document.getElementById('btn');
const parentList = document.getElementById('parent-list');
btn.addEventListener('click', () => {
    const childList = document.createElement('h1');
    childList.textContent = 'ボタンをクリックしました';
    parentList.appendChild(childList);
})

