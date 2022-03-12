// console.log("hi")
showNotes();
//add notes to localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    // console.log(notes)
    let notesObj = [];
    if (notes) {
        notesObj = JSON.parse(notes);
    }
    // console.log(notesObj)
    if (addtxt.value === '') {
        let alrtloc = document.getElementById('alrt');
        let alrt = `<div class="alert alert-danger" role="alert">
        You have to type some notes before clicking add button
        </div>`;
        alrtloc.innerHTML = alrt;
        setTimeout(() => {
            alrtloc.innerHTML = "";
        }, 2000);
    }
    else {
        notesObj.push(addtxt.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addtxt.value = "";

        let alrtloc = document.getElementById('alrt');
        let alrt = `<div class="alert alert-success" role="alert">
        You have successfully added a note!!
        </div>`;
        alrtloc.innerHTML = alrt;
        setTimeout(() => {
            alrtloc.innerHTML = "";
        }, 2000);
    }


    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj = [];
    if (notes) {
        notesObj = JSON.parse(notes);
    }

    // console.log(notesObj)
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard card text-center my-2 mx-2" style="width: 18rem;">
                    
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id=${index} onclick=deleteNote(this.id) class="btn btn-primary" id="dlt">Delete Note</button>
            </div>
            
        </div>`;
    });


    let notesEle = document.getElementById('notes');
    if (notesObj != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerText = "No notes Created So far"
    }
}

function deleteNote(e) {
    console.log(e)

    let notes = localStorage.getItem('notes');
    let notesObj = [];
    if (notes) {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(e, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let srchtxt = document.getElementById('srchtxt');
srchtxt.addEventListener('input', function () {
    let inputval = srchtxt.value

    let cards = document.getElementsByClassName('noteCard');
    Array.from(cards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
        // console.log(cardtxt);
    })
    console.log("input ")

})