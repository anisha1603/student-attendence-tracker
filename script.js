function addStudent() {
  let name = document.getElementById("name").value;
  if(name === "") {
    alert("Please enter a name");
    return;
  }
  let li = document.createElement("li");
  li.textContent = name;
  document.getElementById("list").appendChild(li);x
  document.getElementById("name").value = "";
}