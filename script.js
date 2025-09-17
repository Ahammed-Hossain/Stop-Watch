let Start = document.querySelector('.Start');
let Lap = document.querySelector('.Lap');
let showLap = document.querySelector('.showLap');

// Toggle dark/light mode
const toggleBtn = document.querySelector('.toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode'); // optional, for styling light mode

    // Optional: change toggle text
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light';
    } else {
        toggleBtn.textContent = 'Dark';
    }
});

Lap.disabled = true;
Start.addEventListener('click', function () {
    console.log("Start Clicked");
    Start.innerText = Start.innerText === "Stop" ? "Start" : "Stop";
    Lap.innerText = Lap.innerText === "Reset" ? "Lap" : "Reset";
    Lap.disabled = false;

});


Lap.addEventListener('click', function () {
    console.log("Disabled");
       if (Lap.innerText === "Reset") {
        Lap.disabled = true; 
    } else {
        Lap.innerText = 'Lap'; 
    }

    showLap.innerText = "Ashik"; 
});