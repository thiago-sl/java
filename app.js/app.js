// Fahrenheit to Celsius
document.querySelector('input.fahrenheit-grades').addEventListener('input', fahrenheitToCelsius);
// Celsius to Fahrenheit 
document.querySelector('input.celsius-grades').addEventListener('input', celsiusToFahrenheit);

function fahrenheitToCelsius (object) {
    const value = document.querySelector('input.fahrenheit-grades').value;
    const toCelsius = (value -32) * 0.5556;
    
    document.querySelector('input.celsius-grades').value = Math.round(toCelsius);
    changeBackgroundColorFoCelsius();
}

function celsiusToFahrenheit (object) {
    const value = document.querySelector('input.celsius-grades').value;
    const toFahrenheit = (value * 1.8) + 32;

    document.querySelector('input.fahrenheit-grades').value = Math.round(toFahrenheit);
    changeBackgroundColorFoCelsius();
}

// Change the background color based on the celsius temperature
function changeBackgroundColorFoCelsius () {
    const temperature = document.querySelector('input.celsius-grades').value;
    console.log(temperature);
    
    if (temperature  > 40) {
        document.querySelector('body').style.backgroundColor = 'rgb(140, 14, 14)';
        console.log('temeperatura: 40, 45');
    }
    if (temperature  > 35 && temperature < 40) {
        document.querySelector('body').style.backgroundColor = 'rgb(153, 13, 18)';
        console.log('temeperatura: 30, 35');
    }
    if (temperature  > 30 && temperature < 35) {
        document.querySelector('body').style.backgroundColor = 'rgb(182, 32, 10)';
        console.log('temeperatura: 30, 35');
    }
    if (temperature  > 25 && temperature < 30) {
        document.querySelector('body').style.backgroundColor = 'rgb(218, 75, 0)';
        console.log('temeperatura: 25, 30');
    }
    if (temperature  > 20 && temperature < 25) {
        document.querySelector('body').style.backgroundColor = 'rgb(231, 140, 0)';
        console.log('temeperatura: 20, 25');
    }
    if (temperature  > 15 && temperature < 20) {
        document.querySelector('body').style.backgroundColor = 'rgb(196, 193, 0)';
        console.log('temeperatura: 15, 20');
    }
    if (temperature  > 11 && temperature < 15) {
        document.querySelector('body').style.backgroundColor = 'rgb(109, 196, 5)';
        console.log('temeperatura: 11, 15');
    }
    if (temperature  > 6 && temperature < 11) {
        document.querySelector('body').style.backgroundColor = 'rgb(0, 187, 52)';
        console.log('temeperatura: 6, 10');
    }
    if (temperature  > 1 && temperature < 6) {
        document.querySelector('body').style.backgroundColor = 'rgb(0, 165, 143)';
        console.log('temeperatura: 1 , 6');
    }
    if (temperature == 0) {
        document.querySelector('body').style.backgroundColor = 'rgb(0, 135, 199)';
        console.log('temeperatura: 0');
    }


    // Negative Temperatures
    if (temperature < -1 && temperature > -5 ) {
        document.querySelector('body').style.backgroundColor = 'rgb(33, 101, 216)';
        console.log('temeperatura: 0, -5');
    }
    if (temperature < -6 && temperature > -10  ) {
        document.querySelector('body').style.backgroundColor = 'rgb(30, 81, 182)';
        console.log('temeperatura: -6, -10');
    }
    else if (temperature < -10 && temperature > -15) {
        document.querySelector('body').style.backgroundColor = 'rgb(43, 62, 130)';
        console.log('temeperatura: -10, -15');
    }
    else if (temperature < -16 && temperature > -20) {
        document.querySelector('body').style.backgroundColor = 'rgb(34, 67, 100)';
        console.log('temeperatura: -16, -20');
    }
    else if (temperature < -21 &&temperature > -25) {
        document.querySelector('body').style.backgroundColor = 'rgb(63, 53, 109)';
        console.log('temeperatura: -21, -25');
    }
    else if (temperature < -26 && temperature > -30) {
        document.querySelector('body').style.backgroundColor = 'rgb(76, 44, 79)';
        console.log('temeperatura: -26 -30');
    }
    else if (temperature < -30) {
        document.querySelector('body').style.backgroundColor = 'rgb(69, 43, 73)';
        console.log('temeperatura: -30 -35');
    }
}
