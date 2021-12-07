const init = () => {


    document.querySelector('form').addEventListener('submit', submitFunction);
}

document.addEventListener('DOMContentLoaded', init);



function submitFunction(event) {
    event.preventDefault()
    const inputValue = document.querySelector('input#searchByID').value

    fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(rewsponce => rewsponce.json())
        .then(displaySummary)
}

function displaySummary(data){
    document.querySelector('section#movieDetails h4').textContent = data.title

    document.querySelector('#movieDetails p').textContent = data.summary

}