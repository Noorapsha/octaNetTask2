    const form1 = document.querySelector("#addForm");
 
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
 
    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);



 
function addItem(e) {
    e.preventDefault();
 
    if (submit.value != "Submit") {
        console.log("Hello");
 
        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;
 
        submit.value = "Submit";
        document.getElementById("item").value = "";
 
        document.getElementById("lblsuccess").innerHTML
            = "Text edited successfully";
 
        document.getElementById("lblsuccess")
                        .style.display = "block";
 
        setTimeout(function() {
            document.getElementById("lblsuccess")
                            .style.display = "none";
        }, 3000);
 
        return false;
    }
 
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
 
    let li = document.createElement("li");
    li.className = "list-group-item";
 
    let deleteButton = document.createElement("button");
 
    deleteButton.className =
        "btn-danger btn btn-sm float-right delete";
 
    deleteButton.appendChild(document.createTextNode("Delete"));

 
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
 
    items.appendChild(li);
}

 
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML
                = "Text deleted successfully";
 
            document.getElementById("lblsuccess")
                        .style.display = "block";
 
            setTimeout(function() {
                document.getElementById("lblsuccess")
                        .style.display = "none";
            }, 2000);
        }
    }

}
 

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}