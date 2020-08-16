



function submit() {
    var inputUser = document.querySelector("#user").value;
    var inputPass = document.querySelector("#pass").value;
    if(inputUser == "" || inputPass == "") {
        document.querySelector("#user").value = "";
        document.querySelector("#pass").value = "";
        alert("UserName and Password cannot be Empty....");
        return;
    }

    else {
        
    let createdEle = document.querySelector(".created");
    
    
    let addEle = document.querySelector(".C").cloneNode(true);
    addEle.style.visibility = "visible";
    
    addEle.style.fontSize = "3vh";
    addEle.style.margin = "5px";
    addEle.style.color = "black";
    addEle.children[0].innerHTML = inputUser;
    addEle.children[1].innerHTML = inputPass;

    createdEle.insertBefore(addEle,createdEle.firstChild);
    document.querySelector("#user").value = "";
    document.querySelector("#pass").value = "";

    }
}
