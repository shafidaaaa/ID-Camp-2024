const divs = document.getElementsByTagName('div');
for (let eachDiv of divs) {
    eachDiv.addEventListener('click', function() {
        alert('ELEMEN ' + eachDiv.getAttribute('id').toLocaleUpperCase());
    }, true);
}