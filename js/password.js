 function togglePasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var toggleButton = document.getElementById("toggleButton");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
      }
    }