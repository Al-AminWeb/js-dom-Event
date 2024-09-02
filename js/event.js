//option 1
// <button onclick="console.log(7)"> click me</button>

//option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//option 3.1
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}


//option 4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink'
}

//option 4.1

const greenButton = document.getElementById('make-green')
greenButton.addEventListener('click', function makeGreenButton(){
    document.body.style.backgroundColor='green';
})

//option 4 final

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})


//step 1: add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function () {
    const commentBOx = document.getElementById('new-comment');
    //paragraph ba h1 theke lekha pete gele innerText use korbo input othoba textArea theke newar jonno amra value use korbo.
    //step2: get the comment inside the text area
    const commentBox = document.getElementById('new-comment')
    const newComment = commentBox.value;
    console.log(newComment)

    //step 3:GET The comment container
    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p)
    commentBox.value = '';
})