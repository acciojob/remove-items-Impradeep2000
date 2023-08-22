var button = document.getElementById("removeButton");

button.addEventListener("click", function () {
    var select = document.getElementsById("colorSelect");
    var selectedOption = select.querySelector("option:checked");

    if (selectedOption) {
        select.removeChild(selectedOption);
    }
});