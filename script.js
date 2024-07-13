document.getElementById('new-fact').addEventListener('click', fetchFact);

async function fetchFact() {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await response.json();
    document.getElementById('fact').innerText = data.text;
}

fetchFact();
