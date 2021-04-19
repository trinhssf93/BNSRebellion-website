function register(){

    const button = document.getElementById('registerButton');
button.disabled = true;




var response = grecaptcha.getResponse();


    let formData = new FormData(document.querySelector("#register"));
    let encData = new URLSearchParams(formData.entries());

encData.append('RecaptchaResponse', response);




    fetch("http://api.bnsrebellion.tw:5003/account/register", {method: 'POST', credentials: 'same-origin', body: encData, headers:{}})
        .then(async response => {
            if(response.status == 200){
    button.disabled = false;
                alert("?");
            }
            else if(response.status == 400){
    button.disabled = false;
                alert("Wrong input, please check if you entered all fields correctly.");
            }
            else if(response.status == 201){
    button.disabled = false;
                alert("Account created! Don't forget to login to the client using your e-mail and password. Not username! )");
                 window.location.href = '/downloads.html';
            }
            else if(response.status == 409){
    button.disabled = false;
                alert("E-mail or username already exist!");

            }
            else if(response.status == 417){
    button.disabled = false;
                alert("Google Captcha is wrong!");

            }


 else{
console.log(response.status)
                alert("Error");
button.disabled = false;

            }
        })

}