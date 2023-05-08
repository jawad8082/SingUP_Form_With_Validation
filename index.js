function validateForm() {
        let firstName = document.forms["signupForm"]["firstName"].value;
        let lastName = document.forms["signupForm"]["lastName"].value;
        let gender = document.forms["signupForm"]["gender"].value;
        let age = document.forms["signupForm"]["age"].value;
        let cnic = document.forms["signupForm"]["cnic"].value;
        let qualification = document.forms["signupForm"]["qualification[]"];
        let interest = document.forms["signupForm"]["interest"].value;

        let isValid = true;

        // First Name Validation
        if (firstName === "" || firstName.length < 5) {
            document.getElementById("firstName").classList.add("is-invalid");
            document.getElementById("firstNameError").innerHTML = "Please enter a valid first name (minimum 5 characters).";
            isValid = false;
        } else {
            document.getElementById("firstName").classList.remove("is-invalid");
            document.getElementById("firstNameError").innerHTML = "";
        }

        // Last Name Validation
        if (lastName === "" || lastName.length < 5) {
            document.getElementById("lastName").classList.add("is-invalid");
            document.getElementById("lastNameError").innerHTML = "Please enter a valid last name (minimum 5 characters).";
            isValid = false;
        } else {
            document.getElementById("lastName").classList.remove("is-invalid");
            document.getElementById("lastNameError").innerHTML = "";
        }

        // Gender Validation
        if (gender === "") {
            document.getElementById("genderError").innerHTML = "Please select a gender.";
            isValid = false;
        } else {
            document.getElementById("genderError").innerHTML = "";
        }

        // Age Validation
        if (age === "" || age < 18) {
            document.getElementById("age").classList.add("is-invalid");
            document.getElementById("ageError").innerHTML = "Please enter a valid age (minimum 18 years).";
            isValid = false;
        } else {
            document.getElementById("age").classList.remove("is-invalid");
            document.getElementById("ageError").innerHTML = "";
        }

        // CNIC Validation
        if (cnic === "" || cnic.length !== 13) {
            document.getElementById("cnic").classList.add("is-invalid");
            document.getElementById("cnicError").innerHTML = "Please enter a valid CNIC number (13 digits).";
            isValid = false;
        } else {
            document.getElementById("cnic").classList.remove("is-invalid");
            document.getElementById("cnicError").innerHTML = "";
        }

        // Qualification Validation
        let selectedQualifications = [];
        for (let i = 0; i < qualification.length; i++) {
            if (qualification[i].checked) {
                selectedQualifications.push(qualification[i].value);
            }
        }
        if (selectedQualifications.length === 0) {
            document.getElementById("qualificationError").innerHTML = "Please select at least one qualification.";
            isValid = false;
        } else {
            document.getElementById("qualificationError").innerHTML = "";
        }

        // Interest Validation
        if (interest === "" || interest.length < 100) {
            document.getElementById("interest").classList.add("is-invalid");
            document.getElementById("interestError").innerHTML = "Please enter your interests (minimum 100 characters).";
            isValid = false;
        } else {
            document.getElementById("interest").classList.remove("is-invalid");
            document.getElementById("interestError").innerHTML = "";
        }

        // Submit the form if it's valid
        if (isValid) {
            document.forms["signupForm"].submit();
        }

        return false;
    }