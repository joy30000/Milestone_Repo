// ----------------to save data in local storage
let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (event) => {

  let name = event.target.uname.value;
  let content = event.target.content.value;
  let description = event.target.descrip.value;
  let image = event.target.image.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.push({
    'name': name,
    'image': image,
    'description': description,
    'content': content
  })
  localStorage.setItem("userDetails", JSON.stringify(userData))
  event.target.reset();
  displayData();

  event.preventDefault();


})


//--------------------- to display dat from local storage and create a card
let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = '';

  userData.forEach((element, i) => {
    console.log(element);
    finalData += `<div id="items${i}" style="border: 3px solid #93a8ba;margin-left: 50px; overflow:auto; width:25vw; height:65vh; border-radius:10px; transition-duration: 1s;">
   <div id="container${i}">
    <div id="imageBox"><img class="image" id="image${i}" src="${element.image}" alt=""></div>
    <div class="blogTitle" id="blogTitle${i}">${element.name}</div>

   <!--- <span style="margin-left:22vw"id="cross" onclick=removeData(${i})>&times;</span> --->

    <div class="descrip" id="descrip${i}"><p>${element.description}</p></div>
</div>

 <button  id="bts${i}" onclick=expand(${i})>Read</button>
  <div class="content" id="content${i}"><p>${element.content}</p></div>
   </div>
    `
  });
  main.innerHTML = finalData;
}



// -------------------------to read the full blog
function expand(i) {

  document.getElementById("close").innerHTML = "<-"


  let item = document.getElementById(`items${i}`);

  item.style.marginLeft = "0px";
  item.style.height = "90vh";
  item.style.width = "98vw";
  item.style.position = "absolute";
  item.style.backdropFilter = "blur(70px)";
  item.style.backgroundColor = "#ffffff"
  item.style.zIndex = 2;


  let container = document.getElementById(`container${i}`);

  container.style.borderRadius = "15px";
  container.style.height = "43vh"
  container.style.marginTop = "20px"
  container.style.width = "95vw"
  container.style.marginLeft = "20px"
  container.style.backgroundColor = "#6f11f5"


  let image = document.getElementById(`image${i}`);

  image.style.border = "2px solid white"
  image.style.marginLeft = "71vw"

  let blogTitle = document.getElementById(`blogTitle${i}`);

  blogTitle.style.marginTop = "-220px";
  blogTitle.style.fontSize = "35px";
  blogTitle.style.color = "#ecebfd";
  blogTitle.style.width = "33vw";

  let descrip = document.getElementById(`descrip${i}`);

  descrip.style.fontSize = "20px";
  descrip.style.color = "#ecebfd";
  descrip.style.width = "33vw";



  document.getElementById(`bts${i}`).style.display = "none";

  let content = document.getElementById(`content${i}`);

  content.style.display = "block";
  content.style.border = "2px solid white";
  content.style.width = "95vw";
  content.style.height = "fit-content";
  content.style.marginLeft = "20px";
  content.style.marginTop = "50px";

}


// ---------------------------------onclick + symbol navbar
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

    document.getElementById("main").style.opacity="0"

  }

}
//--------------------------- function to remove cards  and data from local Storage
// let removeData=(index)=>{
//   let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
//   userData.splice(index,1)
//   localStorage.setItem("userDetails",JSON.stringify(userData))
//   displayData()
// }

/*----------to add remove button-------------*/
{/* <span style="margin-left:22vw"id="cross" onclick=removeData(${i})>&times;</span> */ }
displayData();