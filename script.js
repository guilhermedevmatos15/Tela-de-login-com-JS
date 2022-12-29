const button = document.querySelector('button#entrar');

const divUser = document.querySelector('div#input-user');
const divPassword = document.querySelector('div#input-password');

const inputUser = document.querySelector('input#input-username');
const inputPassword = document.querySelector('input#input-password');

const smallUser = document.querySelector('div#input-user > small');
const smallPassword = document.querySelector('div#input-password > small');

inputUser.addEventListener('keyup', () => {
   divUser.classList='';
   smallUser.innerHTML='';

   if (inputUser.value.length < 3 || inputUser.value.length > 20) {
      divUser.classList.add('erro');
      smallUser.innerHTML='Usuario Inválido';
   } else {
      divUser.classList.add('true');
      smallUser.innerHTML='Usuario válido';
   }
});
inputPassword.addEventListener('keyup', () => {
   divPassword.classList='';
   smallPassword.innerHTML='';

   if (inputPassword.value.length < 8) {
      divPassword.classList.add('erro');
      smallPassword.innerHTML='Senha Inválida';
   } else {
      divPassword.classList.add('true');
      smallPassword.innerHTML='Senha válida';
   }
});