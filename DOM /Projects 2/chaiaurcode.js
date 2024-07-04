const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    weight.innerHTML = `Enter Valid Weight ${weight}`;
  } else {
    const bmi = (weight/((height * height)/10000)).toFixed(2)
    result.innerHTML = `BMI is ${bmi}`;
  }

  //console.log(height)
});
