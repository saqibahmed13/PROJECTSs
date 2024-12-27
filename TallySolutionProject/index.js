document.getElementById('clickMeBtn').addEventListener('click', ()=> {
    // Hide the "Click Me" button
    document.getElementById('clickMeBtn').style.display = 'none';
    
    // Show the confirmation card
    document.getElementById('confirmationCard').style.display = 'block';
});

document.getElementById('confirmYes').addEventListener('click', function() {
    alert('You clicked Yes!');
    // Hide the confirmation card
    document.getElementById('confirmationCard').style.display = 'none';
    document.getElementById('clickMeBtn').style.display='block';  // this will again show the click me button
});

document.getElementById('confirmNo').addEventListener('click', function() {
    // Hide the confirmation card
    document.getElementById('confirmationCard').style.display = 'none';
    document.getElementById('clickMeBtn').style.display='block'; // this will again show the click me button 
});
