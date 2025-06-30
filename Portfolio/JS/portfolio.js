document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    function openForm() {
        form.style.display = "block";
    }

    function closeForm() {
        form.style.display = "none";
    }

    document.querySelectorAll(".Pop_Up_Button").forEach(function (button) {
        button.addEventListener("click", openForm);
    });

    document.querySelectorAll(".cancel").forEach(function (btn) {
        btn.addEventListener("click", closeForm);
    });

    document.addEventListener("click", function (event) {
        if (
            form &&
            form.style.display === "block" &&
            !event.target.closest(".form-popup") &&
            !event.target.closest(".Pop_Up_Button")
        ) {
            closeForm();
        }
    });
});
