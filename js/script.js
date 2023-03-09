// dati pre-esistenti
const pricePerKm = 0.21;
const juniorDiscount = 20;
const seniorDiscount = 40;

// @data collection
const js_submit = document.getElementById("submit");
js_submit.addEventListener("click", function() {
    // dati acquisiti tramite input
    const userNameInput = document.getElementById("username");
    const js_username = userNameInput.value;
    const kilometerInput =  document.getElementById("kilometer");
    const js_kilometer = parseFloat(kilometerInput.value);
    const ageInput = document.getElementById("age");
    const js_age = ageInput.value;
    console.log(js_username, js_kilometer, js_age);

// @data check
    if ( js_username == 0 || isNaN(js_kilometer)) {
        alert('Inserisci dati per continuare');
    } else {
// @logic
        // #ticket price
        const ticket = kilometerInput.value * pricePerKm;
        console.log(ticket);
        let price = ticket;
        if (ageInput.value === "junior") {
            price = ticket - ticket * juniorDiscount / 100;
        } else if (ageInput.value === "senior"){
            price = ticket - ticket * seniorDiscount /100;
        }
        console.log(price);
        // #ticket type
        let promotion = "Biglietto standard";
        if (ageInput.value === "junior") {
            promotion = `Sconto 20%`;
        } else if (ageInput.value === "senior") {
            promotion = `sconto 40%`;
        }
        console.log(promotion);
        // #coach number
        let coach = Math.floor((Math.random() * 10) + 1);
        console.log(coach);
        // #code number
        let code = Math.floor((Math.random() * 88888) + 11111);
        console.log(code);
        
// @output
        const element = document.getElementById('result')
        element.classList.remove("d-none");
        userOutput.innerHTML = `${js_username}`;
        promotionOutput.innerHTML = `${promotion}`;
        coachOutput.innerHTML = `${coach}`;
        codeOutput.innerHTML = `${code}`;
        finalPrice.innerHTML = `\u20AC${price.toFixed(2)}`; 
    };
})
    
    
// @data reset
const js_reset = document.getElementById("reset");
js_reset.addEventListener("click", function() {
    const userNameInput = document.getElementById("username");
    const kilometerInput = document.getElementById("kilometer");
    const ageInput = document.getElementById("age");
    // reset input
    userNameInput.value = "";
    kilometerInput.value = "";
    ageInput.value = "";
});