function welcome(firstName, lastName) {
    firstName = 'Belinda';
    lastName = 'Belange Larose';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();
