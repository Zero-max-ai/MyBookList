// UI: functionalities of UI
function showAlert(message) {
    const newDiv = document.createElement('div');
    newDiv.className = 'show-msg';
    newDiv.appendChild(document.createTextNode(message));
    const form = document.querySelector('#book-form');
    const container = document.querySelector('#book-form .container');
    
    form.insertBefore(newDiv,container);
    setTimeout(() => document.querySelector('.show-msg').remove(),3000)
}

// Event: Display a book

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    const date = document.querySelector('#date').value;
    if(title == '' || author == '' || isbn == '' || date == '') {
        showAlert('Please fill all fields');
    } else {
        const div = document.querySelector('#list-books');
        const newDiv = document.createElement('div');
        newDiv.className = `book-detail book book-${e.target[0].value}`;
        div.append(newDiv);

        // adding of title value
        const li1 = document.createElement('li');
        li1.append(document.createTextNode(`Title: ${title}`));
        newDiv.appendChild(li1);

        // adding author value
        const li2 = document.createElement('li');
        li2.append(document.createTextNode(`Author: ${author}`));
        newDiv.appendChild(li2);

        // adding isbn value
        const li3 = document.createElement('li');
        li3.append(document.createTextNode(`ISBN#: ${isbn}`));
        newDiv.appendChild(li3);

        // adding book issue date value
        const li4 = document.createElement('li');
        li4.append(document.createTextNode(`Issue Date: ${date}`));
        newDiv.appendChild(li4);

        // adding delete value
        const del_btn = document.createElement('button');
        const del_btn_val = 'X';
        del_btn.className = 'delete';
        del_btn.id = 'fire';
        del_btn.type = 'submit';
        del_btn.append(document.createTextNode(`Delete: ${del_btn_val}`))
        newDiv.appendChild(del_btn);

        showAlert('Book Added!');

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
})

// Event: Remove a book
const fire_btn = document.querySelector('#list-books');
fire_btn.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})