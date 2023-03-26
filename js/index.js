const links = document.querySelectorAll('.links-div a');
const colors = [
    'purple', 
    'blue', 
    'green', 
    'aqua', 
    'red',
    'brown', 
    'deepskyblue', 
    'magenta', 
    'darkslategrey',
    'yellow',
    'lime'
];

function getRandomColor() {
    Math.seed
    return colors[Math.floor(Math.random() * colors.length)];
}

links.forEach((link) => {
    link.style.backgroundColor = getRandomColor();
    if (['yellow', 'lime', 'aqua'].includes(link.style.backgroundColor)) link.style.color = 'black';
});