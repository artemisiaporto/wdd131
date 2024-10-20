const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

const lastModif = new Date();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModif}`;

const temperature = 9;
const windSpeed = 14;

const calculateWindChill = function (temperature,windSpeed) {
    let windChill = 13.12 + 0.6215 * temperature - (11.37 * (windSpeed ** (0.16))) + 0.3965 * temperature * windSpeed;
    return windChill;
}

if (temperature <= 10 & windSpeed > 4.8) {
    let result = calculateWindChill(temperature,windSpeed);

    document.getElementById("wind-chill").textContent = result.toFixed(2);
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}
