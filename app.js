// document.addEventListener("DOMContentLoaded", function () {
//   const inputBox = document.getElementById("input_box");
//   const listContainer = document.querySelector(".list_container");
//   const addButton = document.getElementById("add_button");

//   if (!inputBox || !listContainer || !addButton) {
//     console.error("Input box, list container, or add button not found!");
//     return;
//   }

//   addButton.addEventListener("click", addTask);

//   listContainer.addEventListener(
//     "click",
//     function (e) {
//       if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//       } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//       }
//     },
//     false
//   );

//   function addTask() {
//     if (inputBox.value === "") {
//       alert("Edilecekler elave edin");
//     } else {
//       let li = document.createElement("li");
//       li.innerHTML = inputBox.value;
//       listContainer.appendChild(li);
//       let span = document.createElement("span");
//       span.innerHTML = "\u00d7";
//       li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
//   }

//   function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
//   }

//   function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
//   }
//   showTask();
// });
document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input_box");
  const listContainer = document.querySelector(".list_container");
  const addButton = document.getElementById("add_button");

  if (!inputBox || !listContainer || !addButton) {
    console.error("Input box, list container, or add button not found!");
    return;
  }

  addButton.addEventListener("click", addTask);

  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        editTask(e.target); // Düzenleme fonksiyonu çağrıldı
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
    false
  );

  function addTask() {
    if (inputBox.value === "") {
      alert("Edilecekler elave edin");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }

  function editTask(li) {
    const newText = prompt("Yeni metni girin:");
    if (newText ==="") {
    alert("Deyisiklik elave edin")
    }else{
  li.innerHTML = newText;
   listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7";
   li.appendChild(span);
  saveData();
    }
  }

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }
  showTask();
});