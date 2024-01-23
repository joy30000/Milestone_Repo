
// ----------------to save data in local storage
let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (event) => {

  let name = event.target.uname.value;
  let status = event.target.status.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.push({
    'name': name,
    'status': status,
  })
  localStorage.setItem("userDetails", JSON.stringify(userData))
  event.target.reset();
  displayData();

  event.preventDefault();


})


//--------------------- to display data from local storage and create a card
let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = '';

  userData.forEach((element, i) => {
    console.log(element);
    finalData += `<div class="cards" id="items${i}">
  
    
    <div class="blogTitle" id="blogTitle${i}">${i + 1}. ${element.name}</div>
    <div  class="status" ><p>Status:&nbsp;&nbsp;<h3 id="element-status${i}"> ${element.status}</h3></p></div>

     

    


 <button style="margin-top:4vh" id="bts${i}" onclick=expand(${i})>Update Status</button>
 <button  onclick=removeData(${i})>Remove</button>
  
   </div>
    `
  });
  main.innerHTML = finalData;
}



// -------------------------to update status
function expand(i) {



  let status = document.getElementById(`element-status${i}`);



  if (status.innerText == "pending" || status.innerText == "Pending") {
    status.innerHTML = "Completed"
    status.style.color = "green"
  }
  else if (status.innerText == "completed" || status.innerText == "Completed") {
    status.innerHTML = "Pending"
    status.style.color = "red"
  }


}


// ---------------------------------onclick add navbar
function add() {
  let close = document.getElementById("close");

  if (close.innerText == "<-" || close.innerText == "x") {
    window.location.reload()
  }
  else {
    let add = document.getElementById("add");
    add.style.position = "absolute";
    add.style.height = "80vh";
    add.style.width = "40vw";
    add.style.zIndex = 3;
    add.style.backgroundColor = "#f4f6fe";
    add.style.marginTop = "70px";
    add.style.right = "25vw";
    add.style.borderRadius = "15px";


    let close = document.getElementById("close");

    close.innerHTML = "x"
    close.style.marginLeft = "35vw"
    close.style.marginTop = "20px"
    close.style.color = "#93a8ba";
    close.style.backgroundColor = "#f4f6fe";

    document.getElementById("main").style.opacity = "0"

  }

}
//--------------------------- function to remove cards  and data from local Storage
let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []
  userData.splice(index, 1)
  localStorage.setItem("userDetails", JSON.stringify(userData))
  displayData()
}

displayData();