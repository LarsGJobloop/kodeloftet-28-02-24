function setStage(newStage) {
    // Hent ut form elementet
    const form = document.querySelector("#multi-step-form")

    // // Fjerner det nåværende css klassen
    form.classList.remove("current-form-1")
    form.classList.remove("current-form-2")
    form.classList.remove("current-form-3")
    form.classList.remove("current-form-4")

    // // Legg til den nye css klassen
    const newClass = "current-form-" + newStage
    form.classList.add(newClass)
}

function submitForm() {
    console.log("Submitting form")
}