const form = document.getElementById("calc")

const bmi = document.getElementById("bmi-value")

form.onsubmit = (event) => {
  const height = document.getElementById("height").value;
  const kg = document.getElementById("kg").value;

  event.preventDefault()

  const result = Number(kg)/Number(height)*Number(height)

  bmi.innerHTML = "Your BMI is " + result
}
