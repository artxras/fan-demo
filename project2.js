function requestQuote() {
    fetch('https://api.kanye.rest/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Data :', data);

        updateQuote(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function updateQuote(data) {
    var quoteElement = document.querySelector('.quote');
    while (quoteElement.firstChild) {
        quoteElement.removeChild(quoteElement.firstChild);
    }

    var pElement = document.createElement("p");
    pElement.textContent = data.quote;
    quoteElement.appendChild(pElement);
}

var updateButton = document.querySelector('.update');
updateButton.addEventListener("click", requestQuote);

requestQuote();