const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const a = item.value
  const b = item1.value

  if (a != "" && b != "") {
    document.querySelector(".alert").classList.remove("fade")
    setTimeout(() => {

      document.querySelector(".alert").classList.add("fade")

    }, 3000);
    itemsArray.push("Title : " + a + "Discription : " + b)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    setTimeout(() => {
      location.reload()

    }, 3000)



  }
  else {
    if (a == "" && b == "") {
      document.querySelector(".alert1").classList.remove("fade")
      setTimeout(() => {

        document.querySelector(".alert1").classList.add("fade")

      }, 3000);
    }
    else if (b == "" && a != "") {
      document.querySelector(".alert3").classList.remove("fade")
      setTimeout(() => {

        document.querySelector(".alert3").classList.add("fade")

      }, 3000);
    }
    else if (a == "" && b != "") {
      document.querySelector(".alert2").classList.remove("fade")
      setTimeout(() => {

        document.querySelector(".alert2").classList.add("fade")

      }, 3000);
    }

  }
})

function displayItems() {
  let items = ""
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
                <div class="input-controller">
                  <textarea class="show-list" id="scrollbar" disabled>${itemsArray[i].slice(0, itemsArray[i].indexOf("Discription"))}\n${itemsArray[i].slice(itemsArray[i].indexOf("Discription"), itemsArray[i].length)}</textarea>
                    <div class"time"><button id="edit-time">${new Date().toLocaleString()}</button>
                    </div>
                    <div class="edit-controller">
                     <i class="fa-solid fa-trash deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                  </div>
                </div>
                <center>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>

                </div>
                </center>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}
function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}

function activateEditListeners() {
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => {
      updateController[i].style.display = "block"
      inputs[i].disabled = false
    })
  })
}

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function createItem(item) {
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i) {
  itemsArray.splice(i, 1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function updateItem(text, i) {
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}
window.onload = function () {

  displayItems()
};
