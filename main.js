function send() {
    var destination = document.getElementById("input").value;
    if (destination == "//Open_Memes") {
        window.location = "test.html";
    } else {
        alert("Access Denied")
    }
}