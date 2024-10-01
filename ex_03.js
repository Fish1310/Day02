function paintRedRectangle() {
    let redRect = document.getElementById('redRect');
    if (redRect) {
        redRect.style.backgroundColor = '#ED6A5E';  
    }
}

function paintGreenRectangle() {
    let greenRect = document.getElementById('greenRect');
    if (greenRect) {
        greenRect.style.backgroundColor = '#99DDC8';  
    }
}

function paintYellowRectangle() {
    let yellowRect = document.getElementById('yellowRect');
    if (yellowRect) {
        yellowRect.style.backgroundColor = 'yellow'; 
    }
}
paintRedRectangle();    
paintGreenRectangle();  
paintYellowRectangle();

