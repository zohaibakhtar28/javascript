const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);

  const weight = parseInt(document.getElementById('weight').value);

  const res = document.querySelector('#results');

  if (height < 0 || isNaN(height) || height === '') {
    res.innerHTML = 'Enter Valid Height';
  }
  if (weight < 0 || isNaN(weight) || weight === '') {
    res.innerHTML = 'Enter Valid weight';
  } else {
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    res.innerHTML = `BMI is ${bmi}`;
  }
});
