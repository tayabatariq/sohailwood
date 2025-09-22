function contacntform() {
    const form = document.getElementById("form");
    const fname = document.getElementById("inputfname");
    const lname = document.getElementById("inputlname");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    const phonenum = document.getElementById("inputnum");
    const city = document.getElementById("inputCity");
    const inputquery = document.getElementById("inputquery");


    const button = document.getElementById("butn");

    function showError(input, errorClass) {
        input.style.border = "1px solid red";
        document.querySelector(errorClass).classList.add("errorMsg");
        input.nextElementSibling.classList.add("errorIcon"); // Add error icon
    }

    function showSuccess(input, errorClass) {
        input.style.border = "1px solid green";
        document.querySelector(errorClass).classList.remove("errorMsg");
        input.nextElementSibling.classList.remove("errorIcon"); // Remove error icon
        input.nextElementSibling.classList.add("succesIcon"); // Add success icon
    }

    function validation() {
        const userfname = fname.value.trim();
        const userlname = lname.value.trim();
        const useremail = email.value.trim();
        const userpassword = password.value.trim();
        const userphonenum = phonenum.value.trim();
        const usercity = city.value.trim();
        const userquery = inputquery.value.trim();

        let isValid = true;

        // Validate First Name
        if (userfname === "" || userfname.length < 5) {
            showError(fname, ".ferror");
            isValid = false;
        } else {
            showSuccess(fname, ".ferror");
        }

        // Validate Last Name
        if (userlname === "" || userlname.length < 5) {
            showError(lname, ".lerror");
            isValid = false;
        } else {
            showSuccess(lname, ".lerror");
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (useremail === "" || !emailRegex.test(useremail)) {
            showError(email, ".emeror");
            isValid = false;
        } else {
            showSuccess(email, ".emeror");
        }

        // Validate Password
        const specialCharRegex = /[!@#$%^&*]/;
        if (userpassword === "" || userpassword.length < 7 || !specialCharRegex.test(userpassword)) {
            showError(password, ".paserror");
            isValid = false;
        } else {
            showSuccess(password, ".paserror");
        }

        // Validate Phone Number
        if (userphonenum === "" || userphonenum.length !== 11 || isNaN(userphonenum)) {
            showError(phonenum, ".phoerror");
            isValid = false;
        } else {
            showSuccess(phonenum, ".phoerror");
        }

        // Validate City
        if (usercity === "") {
            showError(city, ".citerror");
            isValid = false;
        } else {
            showSuccess(city, ".citerror");
        }
// Validate City
if (userquery === "") {
    showError(inputquery, ".citerror");
    isValid = false;
} else {
    showSuccess(inputquery, ".citerror");
}
        // Final Check
        if (!isValid) {
            alert("Please fill all the fields correctly!");
        }

        return isValid;
    }

    // Attach Event Listener
    form.addEventListener("input", (e) => {
        const input = e.target;

        // Dynamically remove error as user types
        if (input === fname) {
            if (input.value.trim() !== "" && input.value.trim().length >= 5) {
                showSuccess(input, ".ferror");
            }
        }
        if (input === lname) {
            if (input.value.trim() !== "" && input.value.trim().length >= 5) {
                showSuccess(input, ".lerror");
            }
        }
        if (input === email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(input.value.trim())) {
                showSuccess(input, ".emeror");
            }
        }
        if (input === password) {
            const specialCharRegex = /[!@#$%^&*]/;
            if (input.value.trim().length >= 7 && specialCharRegex.test(input.value.trim())) {
                showSuccess(input, ".paserror");
            }
        }
        if (input === phonenum) {
            if (input.value.trim().length === 11 && !isNaN(input.value.trim())) {
                showSuccess(input, ".phoerror");
            }
        }
        if (input === city) {
            if (input.value.trim() !== "") {
                showSuccess(input, ".citerror");
            }
        }
        if (input === inputquery) {
            if (input.value.trim() !== "") {
                showSuccess(input, ".citerror");
            }
        }
    });

    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        if (validation()) {
            // Clear error icons after successful submission
            document.querySelectorAll(".fa-exclamation").forEach(icon => {
                icon.classList.remove("errorIcon");
            });
            alert("Form submitted successfully!");
        }
    });

}

contacntform();




