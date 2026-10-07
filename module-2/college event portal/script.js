function registerEvent(eventName) {
    document.getElementById("event").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedEvent = document.getElementById("event").value;

    if (name === "" || email === "" || selectedEvent === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert(
        "Registration successful!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Event: " + selectedEvent
    );

    document.querySelector("form").reset();
}