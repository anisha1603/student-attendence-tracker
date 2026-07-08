function addStudent() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " - Present";

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
}
