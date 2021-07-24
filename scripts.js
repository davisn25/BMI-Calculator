const form = document.getElementById("calc")

form.onsubmit = (event) => {
  const height = document.getElementById("height").value;
  const kg = document.getElementById("kg").value;

  event.preventDefault()

  console.log(event.target)

  console.log(Number(kg)/Number(height)*Number(height))
}
