const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const submitButton = document.querySelector("#sub-button");
const donateButton = document.querySelector("#don-button");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", ()=>{
    menuOpenButton.click()
});

submitButton.addEventListener("click", ()=>{
    showFormData()
});

donateButton.addEventListener("click", ()=>{
    showFormDataDonate()
});

// Funkcija koja obradjuje formu za kontakt
        function showFormData() {
            // Uzima vrednosti sa forme
            var name = document.getElementById("form-name").value;
            var email = document.getElementById("form-email").value;
            var message = document.getElementById("form-message").value;

            // Poruka forme
            var displayMessage = "Vasa poruka je poslata!\n\nIme: " + name + "\nEmail: " + email + "\nPoruka: " + message;

            // Prikaz poruke u dialog box i reset forme
            alert(displayMessage);
            document.getElementById("myform").reset();
            
            return false;
        };

// Funkcija koja obradjuje formu za donacije
        function showFormDataDonate() {
            // Uzima vrednosti sa forme
            var namelastname = document.getElementById("form-name-donate").value;
            var card = document.getElementById("form-card-donate").value;
            var amount = document.getElementById("form-amount-donate").value;

            // Poruka forme
            var displayMessageDonate = "Uspesna uplata!\n\nIme i prezime: " + namelastname + "\nBroj kartice: " + card + "\nIznos: " + amount;

            // Prikaz poruke u dialog box i reset forme
            alert(displayMessageDonate);
            document.getElementById("myformdonate").reset();
            
            return false;
        };