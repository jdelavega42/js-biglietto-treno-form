// dati pre-esistenti
const pricePerKm = 0.21;
const juniorDiscount = 20;
const seniorDiscount = 40;

// @raccolta dati
const js_submit = document.getElementById("submit");
js_submit.addEventListener("click", function() {

    // dati acquisiti tramite input
    const userNameInput = document.getElementById("username");
    const js_username = userNameInput.value;
    const kilometerInput = document.getElementById("kilometer");
    const js_kilometer = kilometerInput.value;
    const ageInput = document.getElementById("age");
    const js_age = ageInput.value;

    console.log(js_username, js_kilometer, js_age);
    
    // @logica
    const ticket = kilometerInput.value * pricePerKm;
    console.log(ticket);
    let price = '';
    if (ageInput == "junior") {
        price = ticket - ticket * juniorDiscount / 100;
    }
    console.log(ticket);
});

// @reset dati
const js_reset = document.getElementById("reset");
js_reset.addEventListener("click", function() {
    const userNameInput = document.getElementById("username");
    const kilometerInput = document.getElementById("kilometer");
    const ageInput = document.getElementById("age");
    // reset input
    userNameInput.value = ""
    kilometerInput.value = ""
    ageInput.value = ""
})