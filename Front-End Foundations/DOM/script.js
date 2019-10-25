function regexChecker() {
    let firstName = document.getElementById("First").value;
    let lastName = document.getElementById("Last").value;
    let nameRegex = /[A-Z]+[a-z]+/;

    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert("Yay! Your inputs were all correct!");
        console.log(true);
    } else {
        alert("Oh no! Thats an invalid format!");
        console.log(false);
    }
}