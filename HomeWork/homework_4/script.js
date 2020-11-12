let inNameForm = document.getElementById('inName')
inNameForm.addEventListener('keypress', checkName);

function checkName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0 && charCode <= 57 && charCode >= 48) {
        evt.preventDefault();
    }
}



let openModal = document.getElementById('openModel')
let closeModal = document.getElementById('closeModal')
let modalWindow = document.getElementById('modalWindow')

openModal.addEventListener('click', OpenModal)
closeModal.addEventListener('click', CloseModal)

function OpenModal() {
    modalWindow.style.display = 'block'
}
function CloseModal() {
    modalWindow.style.display = 'none'
}




let tlGreen = document.getElementById('tlGreen')
let tlYellow = document.getElementById('tlYellow')
let tlRed = document.getElementById('tlRed')
let tlNext = document.getElementById('lightsButton')
let last = tlGreen

tlNext.addEventListener('click', () => {
    if (last === tlGreen) {
        tlGreen.style.backgroundColor = '#888'
        tlYellow.style.backgroundColor = 'yellow'
        last = tlYellow

    } else if (last === tlYellow) {
        tlYellow.style.backgroundColor = '#888'
        tlRed.style.backgroundColor = 'red'
        last = tlRed

    } else if (last === tlRed) {
        tlRed.style.backgroundColor = '#888'
        tlGreen.style.backgroundColor = 'green'
        last = tlGreen
    }
})





let bookArr = ['In Search of Lost Time by Marcel Proust.', 'Ulysses by James Joyce.', 'Don Quixote by Miguel de Cervantes.', 'The Great Gatsby by F.', 'One Hundred Years of Solitude by Gabriel Garcia Marquez.', 'Moby Dick by Herman Melville.', 'War and Peace by Leo Tolstoy.', 'Lolita by Vladimir Nabokov.']
let activeBook = null

let booksContainer = document.getElementById('booksContainer')

bookArr.forEach(item => {
    let book = document.createElement('li')
    book.textContent = item
    book.addEventListener('click', () => {
        if (activeBook != null) {
            activeBook.style.backgroundColor = 'white'
        }
        book.style.backgroundColor = 'orange'
        activeBook = book
    })
    booksContainer.appendChild(book)
});
