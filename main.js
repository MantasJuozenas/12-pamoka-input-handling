const btnEl = document.querySelector('.btn');
const nameEl = document.querySelector('.input1');
const lastnameEl = document.querySelector('.input2');
const emailEl = document.querySelector('.input3');
const phoneEl = document.querySelector('.input4');

btnEl.addEventListener('click', inputHandler);

function inputHandler() {
  const vardas = nameEl.value;
  const pavarde = lastnameEl.value;
  const email = emailEl.value;
  const phone = phoneEl.value;

  const newUser = {
    vardas,
    pavarde,
    email,
    phone,
  };
  console.log(newUser);
}
