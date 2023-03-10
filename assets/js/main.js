// Code By Webdevtrick ( https://webdevtrick.com )
function timeLeft(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 150090) % 60);
  var minutes = Math.floor((t / 150090 / 60) % 60);
  var hours = Math.floor((t / (150090 * 60 * 60)) % 24);
  var days = Math.floor(t / (150090 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

$(document).ready(function () {
  var today = new Date();
  var deadline = "January 1 " + (today.getFullYear() + 1) + " 00:00:00";
  if (today.getMonth() == 0 && today.getDate() == 1) {
    deadline = "January 1 " + today.getFullYear() + " 00:00:00";
  }

  $("#header").hover(function () {
    $(this).toggleClass("bluelight");
  });

  $(".clock").hover(function () {
    $(this).toggleClass("bluelight");
  });

  var setClock = function (newyear) {
    var timeinterval = setInterval(function () {
      var t = timeLeft(newyear);
      $("#days").text(t.days);
      $("#hours").text(t.hours);
      $("#mins").text(("0" + t.minutes).slice(-2));
      $("#secs").text(("0" + t.seconds).slice(-2));
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        $("#header").text("Happy New Year!!!");
        $("#days").text(yearStr[0]);
        $("#days-text").text("Happy");
        $("#hours").text(yearStr[1]);
        $("#hours-text").text("New");
        $("#mins").text(yearStr[2]);
        $("#mins-text").text("Year");
        $("#secs").text(yearStr[3]);
        $("#secs-text").text("!!!");
        $("#info").text("Countdown starts again tomorrow!");
      }
    }, 150090);
  };

  setClock(deadline);
});
$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});
$("#carousel1").owlCarousel({
  autoplay: false,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#carousel2").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#carousel3").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#carousel4").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#carousel5").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#carousel6").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 2,
    },
    1150: {
      items: 3,
    },
  },
});
$("#free-shopping").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});
$("#featurers").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 3,
    },
  },
});
$("#accessories").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});
$("#pajamas").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});
$("#jewelry").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});

$("#tshirts").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: true,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  dots: false,
  margin: 5,
  // padding: 5,
  // stagePadding: 5,
  responsive: {
    0: {
      items: 1,
    },
    577: {
      items: 2,
    },
    633: {
      items: 2,
    },
    769: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
});
$("#whatis").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: false,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 10,
  padding: 10,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      // dots: false
    },
    769: {
      items: 1,
    },
    1150: {
      items: 3,
    },
  },
});

$("#clients").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 1000,
  nav: false,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  loop: true,
  lazyLoad: true,
  margin: 5,
  padding: 5,
  stagePadding: 5,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    769: {
      items: 1,
    },
    1150: {
      items: 1,
    },
  },
});

// start help page
let shuffles = document.querySelectorAll(".shuffle");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < shuffles.length; i++) {
  shuffles[i].addEventListener("click", function () {
    [...shuffles].map((item) => item.classList.remove("active"));
    this.classList.add("active");

    let att = this.getAttribute("data-bs-target");
    let el = document.querySelector(att);
    let shows = document.querySelectorAll(".collapse");
    if (!el.classList.contains("show")) {
      [...shows].map((item) => item.classList.remove("show"));
      el.classList.add("collapsing");
    }
  });
}
// end help page

// start address page step one
let shippingSelect = document.getElementById("shipping-select");
function show_block_shipping_form() {
  $(".block-shipping-card").hide();
  $(".block-shipping-form").show();
  shippingSelect.value = "enter-new-address";
}
function hide_block_shipping_form() {
  $(".block-shipping-form").hide();
  $(".block-shipping-card").show();
}
function toggleShippingForm() {
  let optionValue = shippingSelect.options[shippingSelect.selectedIndex].value;
  if (optionValue === "enter-new-address") {
    show_block_shipping_form();
  } else {
    hide_block_shipping_form();
  }
}

let goingSelect = document.getElementById("going-select");
function show_block_going_form() {
  $(".block-going-card").hide();
  $(".block-going-form").show();
  goingSelect.value = "enter-new-address";
}
function hide_block_going_form() {
  $(".block-going-form").hide();
  $(".block-going-card").show();
}
function toggleGoingForm() {
  let optionValue = goingSelect.options[goingSelect.selectedIndex].value;
  if (optionValue === "enter-new-address") {
    show_block_going_form();
  } else {
    hide_block_going_form();
  }
}
// end address page step one

//////////////////////////////////////////////////////////////////

// start address page step two
function show_block_itemForm() {
  $(".itemForm").show();
  var myDiv = document.querySelector(".itemForm");
  myDiv.scrollIntoView();
}
function hide_block_itemForm() {
  $(".itemForm").hide();
  var myDiv = document.querySelector("#listItems");
  myDiv.scrollIntoView();
}

function show_block_toolDesc() {
  const toolDesc = document.querySelector(".toolDesc");
  window.addEventListener("mouseup", (event) => {
    if (event.target != toolDesc && event.target.parentNode != toolDesc) {
      toolDesc.style.display = "none";
    }
  });
  $(".toolDesc").show();
}
function hide_block_toolDesc() {
  $(".toolDesc").hide();
}
function show_block_toolEach() {
  const toolEach = document.querySelector(".toolEach");
  window.addEventListener("mouseup", (event) => {
    if (event.target != toolEach && event.target.parentNode != toolEach) {
      toolEach.style.display = "none";
    }
  });
  $(".toolEach").show();
}
function hide_block_toolEach() {
  $(".toolEach").hide();
}
function show_block_toolCountry() {
  const toolCountry = document.querySelector(".toolCountry");
  window.addEventListener("mouseup", (event) => {
    if (event.target != toolCountry && event.target.parentNode != toolCountry) {
      toolCountry.style.display = "none";
    }
  });
  $(".toolCountry").show();
}
function hide_block_toolCountry() {
  $(".toolCountry").hide();
}
function show_block_toolCondition() {
  const toolCondition = document.querySelector(".toolCondition");
  window.addEventListener("mouseup", (event) => {
    if (
      event.target != toolCondition &&
      event.target.parentNode != toolCondition
    ) {
      toolCondition.style.display = "none";
    }
  });
  $(".toolCondition").show();
}
function hide_block_toolCondition() {
  $(".toolCondition").hide();
}
function show_block_toolProhibited() {
  const toolProhibited = document.querySelector(".toolProhibited");
  window.addEventListener("mouseup", (event) => {
    if (
      event.target != toolProhibited &&
      event.target.parentNode != toolProhibited
    ) {
      toolProhibited.style.display = "none";
    }
  });
  $(".toolProhibited").show();
}
function hide_block_toolProhibited() {
  $(".toolProhibited").hide();
}
function show_block_toolprotection() {
  const toolprotection = document.querySelector(".toolprotection");
  window.addEventListener("mouseup", (event) => {
    if (
      event.target != toolprotection &&
      event.target.parentNode != toolprotection
    ) {
      toolprotection.style.display = "none";
    }
  });
  $(".toolprotection").show();
}
function hide_block_toolprotection() {
  $(".toolprotection").hide();
}

let descInput = document.querySelector("#desc");
let quantityInput = document.querySelector("#quantity");
let eachInput = document.querySelector("#each");
let countryInput = document.querySelector("#country");
let conditionInput = document.querySelector("#condition");
let totalDiv = document.querySelector("#total");
let submitBtn = document.querySelector("#submitBtn");

let listItems = [];

// Check if Theres Items In Local Storage
if (localStorage.getItem("items")) {
  listItems = JSON.parse(localStorage.getItem("items"));
  calculateTotal(listItems);
  //  Checking the Array Of Items It's Not Empty
  if (listItems.length) {
    viewElementsAtPage(listItems);
    viewElementsAtSectionBox(listItems);
  }
}

submitBtn ? (submitBtn.onclick = addItemToArray) : null;

function addItemToArray() {
  if (
    descInput.value &&
    quantityInput.value &&
    eachInput.value &&
    countryInput.value &&
    conditionInput.value
  ) {
    const item = {
      id: Date.now(),
      Description: descInput.value,
      Quantity: quantityInput.value,
      Each: eachInput.value,
      Country: countryInput.value,
      Condition: conditionInput.value,
      Total: quantityInput.value * eachInput.value,
    };

    // Add Item To Array Of Items
    listItems.push(item);

    // Add Item To Box Content In The Page
    viewElementsAtPage(listItems);

    // Add Item To Box Section In The Page
    viewElementsAtSectionBox(listItems);

    // Calculate Total
    calculateTotal(listItems);

    // Empty Input Field
    descInput.value = "";
    quantityInput.value = "";
    eachInput.value = "";
    countryInput.value = "";
    conditionInput.value = "";
    totalDiv.textContent = "0";

    // Hide Form
    hide_block_itemForm();
  }

  // Add Items To Local Storage
  addDataToLocalStorage(listItems);
}

function viewElementsAtPage(listItems) {
  let ContentDiv = document.querySelector("#boxContents");

  // Empty List Div
  ContentDiv.innerHTML = "";

  listItems.forEach((item, index) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let itemCircle = document.createElement("div");
    itemCircle.classList.add("me-3", "item-circle", "flex-shrink-0");
    itemCircle.innerHTML = index + 1;
    mainDiv.appendChild(itemCircle);

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "mb-2", "flex-grow-1");

    for (const prop in item) {
      if (prop === "id") {
        null;
      } else {
        let colDiv = document.createElement("div");

        colDiv.classList.add("col-4");
        let label = document.createElement("label");
        label.classList.add("fw-bold");
        label.textContent = prop;
        colDiv.appendChild(label);
        let valDiv = document.createElement("div");
        valDiv.textContent = item[prop];
        colDiv.appendChild(valDiv);

        rowDiv.appendChild(colDiv);
      }
    }
    mainDiv.appendChild(rowDiv);
    mainDiv.classList.add("border-bottom", "mb-2");
    ContentDiv.appendChild(mainDiv);
  });
}

function viewElementsAtSectionBox(listItems) {
  let boxSection = document.querySelector("#boxSection");

  // Empty Box Section
  boxSection.innerHTML = "";

  listItems.forEach((item, index) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let itemCircle = document.createElement("div");
    itemCircle.classList.add("me-3", "item-circle", "flex-shrink-0");
    itemCircle.innerHTML = index + 1;
    mainDiv.appendChild(itemCircle);

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "mb-2", "flex-grow-1");

    for (const prop in item) {
      if (prop === "id") {
        null;
      } else {
        let colDiv = document.createElement("div");

        colDiv.classList.add("col-4", "col-md-2", "mb-2");
        let label = document.createElement("label");
        label.classList.add("fw-bold");
        label.textContent = prop;
        colDiv.appendChild(label);
        let valDiv = document.createElement("div");
        valDiv.classList.add("text-muted");
        valDiv.textContent = item[prop];
        colDiv.appendChild(valDiv);

        rowDiv.appendChild(colDiv);
      }
    }

    // add edit and delete
    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("col-12", "text-end");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add(
      "btn",
      "btn-link",
      "text-success",
      "text-decoration-none",
      "p-0",
      "me-2"
    );
    editBtn.onclick = () => editItem(item.id);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add(
      "btn",
      "btn-link",
      "text-danger",
      "text-decoration-none",
      "p-0"
    );
    deleteBtn.onclick = () => deleteItem(item.id);

    buttonsDiv.append(editBtn, deleteBtn);
    rowDiv.appendChild(buttonsDiv);

    mainDiv.appendChild(rowDiv);
    if (index !== listItems.length - 1) {
      mainDiv.classList.add("border-bottom", "mb-2");
    }
    boxSection.appendChild(mainDiv);
  });
}

function calculateTotal(listItems) {
  let total = listItems.reduce((acc, curr) => {
    return (acc += curr.Total);
  }, 0);
  let totalBoxValue = document.querySelector("#totalBoxValue");
  totalBoxValue.textContent = total;
}

function deleteItem(id) {
  listItems.map((item) => {
    if (item.id === id) {
      listItems.splice(item, 1);

      // Empty Input Field
      descInput.value = "";
      quantityInput.value = "";
      eachInput.value = "";
      countryInput.value = "";
      conditionInput.value = "";
      totalDiv.textContent = "0";

      // Hide Form With Update Data
      hide_block_itemForm();

      // Return View Items ON Box Content In The Page
      viewElementsAtPage(listItems);

      // Return View Items ON Box Section In The Page
      viewElementsAtSectionBox(listItems);

      // Calculate Total
      calculateTotal(listItems);

      // Add Items To Local Storage
      addDataToLocalStorage(listItems);
    }
  });
}

function editItem(id) {
  let item = listItems.find((item) => {
    return item.id === id;
  });
  descInput.value = item.Description;
  quantityInput.value = item.Quantity;
  eachInput.value = item.Each;
  countryInput.value = item.Country;
  conditionInput.value = item.Condition;
  totalDiv.textContent = "$ " + item.Total;
  submitBtn.textContent = "Update Item";
  submitBtn.onclick = () => updateItem(id);
  // Show Form With Item Data
  show_block_itemForm();
}

function updateItem(id) {
  if (
    descInput.value &&
    quantityInput.value &&
    eachInput.value &&
    countryInput.value &&
    conditionInput.value
  ) {
    listItems.map((item) => {
      if (item.id === id) {
        item.Description = descInput.value;
        item.Quantity = quantityInput.value;
        item.Each = eachInput.value;
        item.Country = countryInput.value;
        item.Condition = conditionInput.value;
        item.Total = quantityInput.value * eachInput.value;
      }
    });
    // Return View Items ON Box Content In The Page
    viewElementsAtPage(listItems);

    // Return View Items ON Box Section In The Page
    viewElementsAtSectionBox(listItems);

    // Calculate Total
    calculateTotal(listItems);

    // Empty Input Field
    descInput.value = "";
    quantityInput.value = "";
    eachInput.value = "";
    countryInput.value = "";
    conditionInput.value = "";
    totalDiv.textContent = "0";

    // Hide Form With Update Data
    hide_block_itemForm();

    // Return submitBtn To Add Item
    submitBtn.textContent = "Classify This Item";
    submitBtn.onclick = addItemToArray;

    // Add Items To Local Storage
    addDataToLocalStorage(listItems);
  }
}
// end address page step two

function addDataToLocalStorage(arrayOfItems) {
  window.localStorage.setItem("items", JSON.stringify(arrayOfItems));
}

//////////////////////////////////////////////////////////////////

// start payment page step four
(function () {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month_selected = "Month"; // current month
  var option = "";
  option = "<option>Month</option>"; // first option

  for (let i = 0; i < months.length; i++) {
    let month_number = i + 1;

    // value month number with 0. [01 02 03 04..]
    let month = month_number <= 9 ? "0" + month_number : month_number;

    let selected = i === month_selected ? " selected" : "";
    option +=
      '<option value="' +
      month +
      '"' +
      selected +
      ">" +
      months[i] +
      "</option>";
  }
  document.getElementById("month").innerHTML = option;
})();

(function () {
  let year_satart = 1970;
  let year_end = new Date().getFullYear(); // current year
  let year_selected = "Year";

  let option = "";
  option = "<option >Year</option>"; // first option

  for (let i = year_end; i >= year_satart; i--) {
    let selected = i === year_selected ? " selected" : "";
    option += '<option value="' + i + '"' + selected + ">" + i + "</option>";
  }

  document.getElementById("year").innerHTML = option;
})();
// end payment page step four

//////////////////////////////////////////////////////////////////
