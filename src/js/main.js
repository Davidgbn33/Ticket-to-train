function validateForm() {
  const form = document.forms['exo3form'];

  // nom des champs du formulaire
  const inputs = [
    'lastName',
    'firstName',
    'phone',
    'Adress',
    'birthday',
    'password',
    'email',
  ];

  let valid = true;

  for (const input of inputs) {
    if (form[input].value === '') {
      alert(`${input} cannot be empty`);
      valid = false;
    }
  }

  const choiceBoxes = document.getElementById('choiceBox');

  for (const choiceBox of choiceBoxs) {
    if (choiceBox.value.trim() === '') {
      alert(`${choiceBox} The field has not been filled in`);
      valid = false;
    }
  }

  const checkbox = document.getElementById('checkbox');

  if (!checkbox.checked) {
    alert('you have to check the box');
    valid = false;
  }

  if (valid === true) {
    let valName = document.getElementById('name').value;
    let valEmail = document.getElementById('email').value;
    console.log(valName);
    console.log(valEmail);
  }
}

const email3 = document.getElementById('email3').value;
if (!email3 || !email3.includes('@')) {
  alert('Veuillez saisir une adresse email valide.');
  valid = false;
}

/* <label for='prenom'>Entrez votre prénom svp : </label>
            <input type='text' name='prenom' id='prenom' maxlength='20' required>
            <span id='missPrenom'></span><br></br> */

const formatValid =
  /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

formatValid.addEventListener('click', validation);

function validation(event) {
  //Si le champ est vide
  if (prenom.validity.valueMissing) {
    event.preventDefault();
    missPrenom.textContent = 'Prénom manquant';
    missPrenom.style.color = 'red';
    //Si le format de données est incorrect
  } else if (prenomValid.test(prenom.value) == false) {
    event.preventDefault();
    missPrenom.textContent = 'Format incorrect';
    missPrenom.style.color = 'orange';
  } else {
  }
}
