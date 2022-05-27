var COREECT_USERNAME = 'taikhoanbacsy01';
var COREECT_PASSWORD = '123';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');
var fromLogin = document.getElementById('form-login');

if(fromLogin.attachEvent){
    fromLogin.attachEvent('submit', onFormSubmit);
}else{
    fromLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    var username = inputUsername.value;
    var password = inputPassword.value;
    if(username == COREECT_USERNAME && password == COREECT_PASSWORD){
         setTimeout(function(){
            location.replace("/ModuleDocter01/sloctc.html");
          });
    }else{
        
    }
}