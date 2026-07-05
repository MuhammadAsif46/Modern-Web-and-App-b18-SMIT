

import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginError = document.getElementById("login-error");
const signupError = document.getElementById("signup-error");
const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const panelLogin = document.getElementById("panel-login");
const panelSignup = document.getElementById("panel-signup");


onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});


function showPanel(panel) {
  const isLogin = panel === "login";
  panelLogin.classList.toggle("hidden", !isLogin);
  panelSignup.classList.toggle("hidden", isLogin);
  tabLogin.classList.toggle("active", isLogin);
  tabSignup.classList.toggle("active", !isLogin);
  loginError.textContent = "";
  signupError.textContent = "";
}
tabLogin.addEventListener("click", () => showPanel("login"));
tabSignup.addEventListener("click", () => showPanel("signup"));


function friendlyAuthError(error) {
  const map = {
    "auth/invalid-email": "That email address looks invalid.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect email or password.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/email-already-in-use": "An account with that email already exists.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/missing-password": "Please enter a password.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
  };
  return map[error.code] || "Something went wrong. Please try again.";
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const submitBtn = loginForm.querySelector("button[type='submit']");

  submitBtn.disabled = true;
  submitBtn.textContent = "Logging in...";

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error);
    loginError.textContent = friendlyAuthError(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Log in";
  }
});


signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  signupError.textContent = "";

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm").value;
  const submitBtn = signupForm.querySelector("button[type='submit']");

  if (password !== confirmPassword) {
    signupError.textContent = "Passwords do not match.";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Creating account...";

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Sign up failed:", error);
    signupError.textContent = friendlyAuthError(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Create account";
  }
});
