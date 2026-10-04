const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertBtn =
    document.getElementById("convertBtn");

const clearBtn =
    document.getElementById("clearBtn");

const resultSection =
    document.getElementById("resultSection");

const message =
    document.getElementById("message");

const celsiusResult =
    document.getElementById("celsiusResult");

const fahrenheitResult =
    document.getElementById("fahrenheitResult");

const kelvinResult =
    document.getElementById("kelvinResult");


function formatTemperature(value, unit) {

    if (unit === "K") {
        return `${value.toFixed(2)} K`;
    }

    return `${value.toFixed(2)} °${unit}`;
}


function convertTemperature() {

    const inputValue = temperatureInput.value.trim();

    const value = parseFloat(inputValue);

    const unit = unitSelect.value;

    message.textContent = "";


    if (inputValue === "") {

        resultSection.classList.add("hidden");

        message.textContent =
            "Please enter a temperature.";

        return;
    }


    if (Number.isNaN(value)) {

        resultSection.classList.add("hidden");

        message.textContent =
            "Please enter a valid numerical temperature.";

        return;
    }


    if (unit === "kelvin" && value < 0) {

        resultSection.classList.add("hidden");

        message.textContent =
            "Kelvin temperature cannot be below 0 K.";

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    if (unit === "celsius") {

        celsius = value;

        fahrenheit =
            (value * 9 / 5) + 32;

        kelvin =
            value + 273.15;
    }


    else if (unit === "fahrenheit") {

        fahrenheit = value;

        celsius =
            (value - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    else if (unit === "kelvin") {

        kelvin = value;

        celsius =
            value - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    celsiusResult.textContent =
        formatTemperature(celsius, "C");

    fahrenheitResult.textContent =
        formatTemperature(fahrenheit, "F");

    kelvinResult.textContent =
        formatTemperature(kelvin, "K");


    resultSection.classList.remove("hidden");
}


function clearConverter() {

    temperatureInput.value = "";

    unitSelect.value = "celsius";

    celsiusResult.textContent = "—";

    fahrenheitResult.textContent = "—";

    kelvinResult.textContent = "—";

    message.textContent = "";

    resultSection.classList.add("hidden");

    temperatureInput.focus();
}


convertBtn.addEventListener(
    "click",
    convertTemperature
);


clearBtn.addEventListener(
    "click",
    clearConverter
);


temperatureInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            convertTemperature();
        }

    }
);