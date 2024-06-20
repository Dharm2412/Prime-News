import React from "react";
function Login() {
  return (
    <>
      {/* FORMULAIRE DE CONNEXION */}
      <div className="containerf">
        <div className="card">
          <h2>Login Form</h2>
          {/* SE CONNECTER / S'INSCRIRE */}
          <div className="login_register">
            <a
              href="
https://codepen.io/pen?template=gOEqMVq
"
              className="login"
              target="blank"
            >
              Login
            </a>
            <a
              href="
https://codepen.io/pen?template=VwRgKYB
"
              className="register"
              target="blank"
            >
              Signup
            </a>
          </div>
          {/* FORMULAIRE */}
          <form className="form">
            <input type="email" placeholder="Email Adress" className="email" />
            <input type="password" placeholder="password" className="pass" />
          </form>
          {/* MOT DE PASSE OUBLIE ? */}
          <a href="#" className="fp">
            Forgot password?
          </a>
          {/* BOUTTON LOGIN */}
          <button type="button" className="login_btn">
            Login
          </button>
          {/* PIED DE LA CARD */}
          <div className="footer_card">
            <p>Not a member?</p>
            <a href="#">Singup now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
