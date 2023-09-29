function validateForm() {
  const form = document.forms['form'];

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
  console.log(inputs);
  let valid = true;

  for (const input of inputs) {
    if (form[input].value === '') {
      alert(`${input} cannot be empty`);
      valid = false;
    }
  }

  if (valid === true) {
    let valName = document.getElementById('lastName').value;

    console.log(valName);
  }
}
