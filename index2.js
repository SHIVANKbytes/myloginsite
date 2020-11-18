pr = document.getElementById('prsnt').value;
function submit(form) {
    if (form.userid.value == "1") {
        document.getElementById('prt').innerHTML = pr;
    }
    else {
        alert("Error Password or Username")
    }
}