function calculateArea() {
  const base = document.getElementById("base").value;
  const height = document.getElementById("height").value;

  if (base > 0 && height > 0) {
    const area = 0.5 * base * height;
    document.getElementById(
      "result-area"
    ).innerHTML = `The area of the triangle is <b>${area}</b>`;
    document.getElementById("formula-area").innerText = "area = 1/2 * a * t";
    document.getElementById(
      "input-formula-area"
    ).innerText = `area = 1/2 * ${base} * ${height}`;

    document.getElementById(
      "result-formula-area"
    ).innerText = `area (L) = ${area}`;
  } else if (base == "" && height == "") {
    alert("Please Enter the value of base and height first !!!");
  } else {
    document.getElementById("result-area").innerText =
      "Please enter positive numbers for base and height.";
  }
}

// perimeter function
function calculatePerimeter() {
  const sideA = document.getElementById("sideA").value;
  const sideB = document.getElementById("sideB").value;
  const sideC = document.getElementById("sideC").value;
  if (sideA > 0 && sideB > 0 && sideC > 0) {
    const perimeter = sideA + sideB + sideC;
    document.getElementById(
      "result-perimeter"
    ).innerHTML = `The perimeter of the triangle is <b>${perimeter}</b>`;

    document.getElementById("formula-perimeter").innerText =
      "perimeter = a + b + c";
    document.getElementById(
      "input-formula"
    ).innerText = `perimeter = ${sideA} + ${sideB} + ${sideC}`;

    document.getElementById(
      "result-formula"
    ).innerText = `perimeter = ${perimeter}`;
  } else if (sideA == "" && sideB == "" && sideC == "") {
    alert("Please Enter the value of all of side triangle first !!!");
  } else {
    document.getElementById("result-perimeter").innerText =
      "Please enter positive numbers for all sides.";
  }
}

// Function to handle form reset
function handleResetArea() {
  const formA = document.getElementById("area-form");
  formA.reset();
  document.getElementById("result-area").textContent = "";
  document.getElementById("formula-area").textContent = "";
  document.getElementById("input-formula-area").textContent = "";
  document.getElementById("result-formula-area").textContent = "";
}

// Function to handle form reset
function handleResetPerimeter() {
  const form = document.getElementById("perimeter-form");
  form.reset();
  document.getElementById("result-perimeter").textContent = "";
  document.getElementById("formula-perimeter").textContent = "";

  document.getElementById("input-formula").textContent = "";
  document.getElementById("result-formula").textContent = "";
}
