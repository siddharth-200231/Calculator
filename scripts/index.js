document.querySelector('#btn').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    document.querySelector('#display_name').innerHTML = `<h2>${name}<h2>`;})