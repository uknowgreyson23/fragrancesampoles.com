
function submitPoll() {
    const choices = document.getElementsByName("scent");
    let selected = "";
    for (let choice of choices) {
        if (choice.checked) {
            selected = choice.value;
            break;
        }
    }
    if (selected) {
        document.getElementById("poll-result").innerHTML = `You voted for: ${selected}`;
    } else {
        alert("Please select an option before voting.");
    }
}
