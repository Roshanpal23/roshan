const div = document.getElementById('myDiv');

// Using appendChild (only elements):
const p1 = document.createElement('p');
p1.textContent = 'First paragraph';
div.appendChild(p1);

// Using append (can append elements and strings):
const p2 = document.createElement('p');
p2.textContent = 'Second paragraph';
div.append(p2, 'Additional text');
