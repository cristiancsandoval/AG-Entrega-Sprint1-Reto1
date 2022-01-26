//MENÚ DINÁMICO EN LA SECCIÓN FEATURES//

//Variables - Elementos HTML
let feature1Btn = document.getElementById("feature1-btn");
let feature2Btn = document.getElementById("feature2-btn");
let feature3Btn = document.getElementById("feature3-btn");
let feature1Content = document.getElementById("feature1-content");
let feature2Content = document.getElementById("feature2-content");
let feature3Content = document.getElementById("feature3-content");

feature1Btn.addEventListener("click", () => {

    feature1Btn.setAttribute("class", "feat-btn-active");
    feature2Btn.setAttribute("class", "");
    feature3Btn.setAttribute("class", "")

    feature1Content.setAttribute("class", "feature-content");
    feature2Content.setAttribute("class", "d-none");
    feature3Content.setAttribute("class", "d-none");

});

feature2Btn.addEventListener("click", () => {

    feature2Btn.setAttribute("class", "feat-btn-active");
    feature1Btn.setAttribute("class", "");
    feature3Btn.setAttribute("class", "")

    feature2Content.setAttribute("class", "feature-content");
    feature1Content.setAttribute("class", "d-none");
    feature3Content.setAttribute("class", "d-none");

});

feature3Btn.addEventListener("click", () => {

    feature3Btn.setAttribute("class", "feat-btn-active");
    feature2Btn.setAttribute("class", "");
    feature1Btn.setAttribute("class", "")

    feature3Content.setAttribute("class", "feature-content");
    feature2Content.setAttribute("class", "d-none");
    feature1Content.setAttribute("class", "d-none");

});


//VALIDACIÓN DEL FORMULARIO DE CONTACTO//

//Variables - Elementos HTML
let email = document.getElementById("email");
let btnFormulario = document.getElementById("btn-Contact");
let alerta = document.getElementById("alert-contact");
let imgAlert = document.getElementById("img-alert");
let sendEmail = document.getElementById("sendEmail");

//Validación formulario de contacto

const borrarAlert = () => {
    alerta.setAttribute("class", "d-none");
    imgAlert.setAttribute("class", "d-none");
}

btnFormulario.addEventListener("click", (e) => {

    correo = email.value;
    noVacio = (correo !== "");
    formatoValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    esValido = formatoValido.test(correo);

    if (noVacio && esValido) {

        borrarAlert();

        //Envío de email
        sendEmail.setAttribute("href", `mailto:bookmark@bookmark.com?subject=Request by ${correo}&body=Hi! I want to contact Bookmark`);
        sendEmail.click();


    } else {

        alerta.setAttribute("class", "d-flex flex-row justify-content-center align-items-center");
        imgAlert.setAttribute("class", "");

    }

})