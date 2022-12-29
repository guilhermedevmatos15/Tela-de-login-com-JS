const button = document.querySelector('button#entrar');

const divUser = document.querySelector('div#input-user');
const divPassword = document.querySelector('div#input-password');

const inputUser = document.querySelector('input#input-username');
const inputPassword = document.querySelector('input#input-password');

const smallUser = document.querySelector('div#input-user > small');
const smallPassword = document.querySelector('div#input-password > small');

const validations = {
   user() {
      divUser.classList='';
      smallUser.innerHTML='';

      if (inputUser.value.length < 3 || inputUser.value.length > 20) {
         divUser.classList.add('erro');
         smallUser.innerHTML='Usuario Inválido';
         return false;
      } else {
         divUser.classList.add('true');
         smallUser.innerHTML='Usuario válido';
         return true;
      }
   },
   password() {
      divPassword.classList='';
      smallPassword.innerHTML='';

      if (inputPassword.value.length < 8) {
         divPassword.classList.add('erro');
         smallPassword.innerHTML='Senha Inválida';
         return false;
      } else {
         divPassword.classList.add('true');
         smallPassword.innerHTML='Senha válida';
         return true;
      }
   }
};

inputUser.addEventListener('keyup', validations.user);
inputPassword.addEventListener('keyup', validations.password);

button.addEventListener('click', () => {
   if (validations.user() == true && validations.password() == true) {
      // Zerando tudo (simulando como se fosse um submit)
      divUser.classList='';
      smallUser.innerHTML='';
      divPassword.classList='';
      smallPassword.innerHTML='';
      inputUser.value='';
      inputPassword.value='';
   }
})








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! Este código acima é aplicando conceito de objeto.método (apenas um teste), aqui vai o código com funções fora de objetos: 

/*

const button = document.querySelector('button#entrar');

const divUser = document.querySelector('div#input-user');
const divPassword = document.querySelector('div#input-password');

const inputUser = document.querySelector('input#input-username');
const inputPassword = document.querySelector('input#input-password');

const smallUser = document.querySelector('div#input-user > small');
const smallPassword = document.querySelector('div#input-password > small');


function validUser() {
   divUser.classList='';
   smallUser.innerHTML='';

   if (inputUser.value.length < 3 || inputUser.value.length > 20) {
      divUser.classList.add('erro');
      smallUser.innerHTML='Usuario Inválido';
      return false;
   } else {
      divUser.classList.add('true');
      smallUser.innerHTML='Usuario válido';
      return true;
   }
}
function validPassword() {
   divPassword.classList='';
   smallPassword.innerHTML='';

   if (inputPassword.value.length < 8) {
      divPassword.classList.add('erro');
      smallPassword.innerHTML='Senha Inválida';
      return false;
   } else {
      divPassword.classList.add('true');
      smallPassword.innerHTML='Senha válida';
      return true;
   }
}

inputUser.addEventListener('keyup', validUser);
inputPassword.addEventListener('keyup', validPassword);
button.addEventListener('click', () => {
   if (validUser() == true && validPassword() == true) {
      // Zerando tudo (simulando como se fosse um submit)
      divUser.classList='';
      smallUser.innerHTML='';
      divPassword.classList='';
      smallPassword.innerHTML='';
      inputUser.value='';
      inputPassword.value='';
   }
})

*/