
// Contact Form Contavy us

function se() {
      var n = document.getElementById("name").value
      var e = document.getElementById("email").value
      var p = document.getElementById("sub").value
      var msg = document.getElementById("msg").value

      if (n == "" || e == "" || p == "" || msg == "") {
        document.getElementById("error").style.display = "block"
        document.getElementById("error").innerHTML = "Please Fill All Input"
      }
      else {
        localStorage.setItem("name", n)
        localStorage.setItem("email", e)
        localStorage.setItem("sub", p)
        localStorage.setItem("msg", msg)
        document.getElementById("error").style.display = "none"
        document.getElementById("error").innerHTML = ""
        alert("Hello How Are You")
      }
    }