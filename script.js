var employeeInput = document.getElementById("employee-number");

var clockButton = document.getElementById("clock-in");
var viewButton = document.getElementById("view-all");

var container = document.getElementById("employeeinfo");

var staff = {
  "employees": [{
      "id": 1,
      "firstName": "Cookie",
      "lastName": "Monster",
      "photo": "images/employee-1.jpg",
      "position": "baker"
    },
    {
      "id": 2,
      "firstName": "Kermit",
      "lastName": "Frog",
      "photo": "images/employee-2.jpg",
      "position": "store manager"
    },
    {
      "id": 3,
      "firstName": "Big",
      "lastName": "Bird",
      "photo": "images/employee-3.jpg",
      "position": "produce stocker"
    }
  ]
};


clockButton.addEventListener('click', ()=>{
  console.log("Clock-In clicked.")
  var today= new Date();
  for(let i = 0; i < staff.employees.length; i++) {
    if (staff.employees[i].id === parseInt(employeeInput.value)){
      console.log("The if statement ran.");
      staff.employees[i].clockIn = today;
      console.log(staff.employees);
    } else {
      staff.employees[i].clockIn = "No recent punch-in";
    }
  }
  employeeInput.value = "";
});




viewButton.addEventListener('click', ()=>{
  console.log("View clicked.")
  for (let i = 0; i < staff.employees.length; i++) {
    console.log(staff.employees[i].firstName);
    var employeeName = `<section><img src = 'images/employee-${[i]}.jpg'> <p>${staff.employees[i].firstName} ${staff.employees[i].lastName}</p> <p>${staff.employees[i].position}</p><p>${staff.employees[i].clockIn}</p></section></br>`;
    container.insertAdjacentHTML('beforeend', employeeName);
  }
});

// Code for Assignment 10 below

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var produce  = JSON.parse(xhr.responseText);
    var inStock = document.getElementById("instock").innerHTML = "<h1>In Stock</h1>";
    var outOfStock = document.getElementById("outofstock").innerHTML = "<h1>Out Of Stock</h1>";
    // instock = "<ul>";
    // outofstock = "<ul>";
    for (var i = 0; i < produce.length; i++ ) {
      if (produce[i].instock === true) {
        inStock += `<li>${produce[i].name}</li>`
      } else (
        outOfStock += `<li>${produce[i].name}</li>`
      )
    }
    // inStock += "</ul>";
    // outOfStock += "</ul>";
    document.getElementById("instock").innerHTML = inStock;
    document.getElementById("outofstock").innerHTML = outOfStock;
  }
};

xhr.open ('GET', 'produce.json');
xhr.send();