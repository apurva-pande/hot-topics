const container = document.querySelector('.content');
const links = document.querySelectorAll('.navbar ul li a');



function loadContent(link) {
    fetch(link)
        .then(response => {
            return response.text();
        })


        .then(data => {
            container.innerHTML = data;
            console.log(data);
        })


        .catch(error => {
            console.error('Facing issues loading the content', error);
        });
}


function selectContent(action) {
    action.preventDefault();
    const link = action.target.href;
    loadContent(link);
}


links.forEach(link => {
    link.addEventListener('click', selectContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const first = links[0].href;
    loadContent(first);
});