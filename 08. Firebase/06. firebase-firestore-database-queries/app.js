
import { auth, db } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  limit,
  where,
  or
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const userEmailEl = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

const userForm = document.getElementById("user-form");
const userIdField = document.getElementById("user-id");
const fullNameField = document.getElementById("full-name");
const emailField = document.getElementById("email");
const ageField = document.getElementById("age");
const cityField = document.getElementById("city");
const professionField = document.getElementById("profession");
const formError = document.getElementById("form-error");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("form-submit-btn");
const cancelBtn = document.getElementById("form-cancel-btn");

const tableBody = document.getElementById("user-table-body");
const userCountEl = document.getElementById("user-count");
const emptyState = document.getElementById("empty-state");
const loadingState = document.getElementById("loading-state");

const viewModal = document.getElementById("view-modal");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close-btn");

const toastContainer = document.getElementById("toast-container");


let usersCache = {};
let unsubscribeUsers = null;


onAuthStateChanged(auth, (user) => {
  if (!user) {
    if (unsubscribeUsers) unsubscribeUsers();
    window.location.href = "index.html";
    return;
  }
  userEmailEl.textContent = user.email;
  startUsersListener();
});

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
 
  } catch (error) {
    console.error("Logout failed:", error);
    showToast("Could not log out. Please try again.", "error");
  }
});

// get data 
function startUsersListener() {
  // const usersQuery = query(collection(db, "usersCollection"), orderBy("createdAt", "desc"), limit(3));
  const usersQuery = query(collection(db, "usersCollection"), 
    orderBy("createdAt", "desc"), 
    or(
      where("city", "==", "karachi"), 
      where("age", ">=", 18), 
    ),
  );

  unsubscribeUsers = onSnapshot(
    usersQuery,
    (snapshot) => {
      loadingState.classList.add("hidden");
      usersCache = {};
      snapshot.forEach((docSnap) => {
        usersCache[docSnap.id] = docSnap.data();
      });
      renderTable();
    },
    (error) => {
      console.error("Failed to load users:", error);
      loadingState.classList.add("hidden");
      showToast("Could not load users. Check your connection and Firestore rules.", "error");
    }
  );
}

function renderTable() {
  const ids = Object.keys(usersCache);
  userCountEl.textContent = ids.length;
  tableBody.innerHTML = "";

  if (ids.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  ids.forEach((id) => {
    const u = usersCache[id];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${escapeHtml(u.fullName)}</td>
      <td>${escapeHtml(u.email)}</td>
      <td>${escapeHtml(String(u.age))}</td>
      <td>${escapeHtml(u.city)}</td>
      <td>${escapeHtml(u.profession)}</td>
      <td class="actions-col">
        <button class="btn btn-icon" data-action="view" data-id="${id}" title="View">View</button>
        <button class="btn btn-icon" data-action="edit" data-id="${id}" title="Edit">Edit</button>
        <button class="btn btn-icon btn-danger" data-action="delete" data-id="${id}" title="Delete">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

tableBody.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const { action, id } = btn.dataset;

  if (action === "view") openViewModal(id);
  if (action === "edit") loadIntoForm(id);
  if (action === "delete") handleDelete(id);
});

// add data
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  formError.textContent = "";

  const fullName = fullNameField.value.trim();
  const email = emailField.value.trim();
  const age = Number(ageField.value);
  const city = cityField.value.trim();
  const profession = professionField.value.trim();
  const editingId = userIdField.value;

  if (!fullName || !email || !city || !profession || Number.isNaN(age)) {
    formError.textContent = "Please fill in every field with a valid value.";
    return;
  }

  const payload = { fullName, email, age, city, profession };

  submitBtn.disabled = true;
  submitBtn.textContent = editingId ? "Updating..." : "Saving...";

  try {
    if (editingId) {
      await updateDoc(doc(db, "usersCollection", editingId), {
        ...payload,
        updatedAt: serverTimestamp(),
      });
      showToast("User updated.", "success");
    } else {
      await addDoc(collection(db, "usersCollection"), {
        ...payload,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      showToast("User added.", "success");
    }
    resetForm();
  } catch (error) {
    console.error("Failed to save user:", error);
    formError.textContent = "Could not save this user. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Save user";
  }
});

cancelBtn.addEventListener("click", resetForm);

function resetForm() {
  userForm.reset();
  userIdField.value = "";
  formTitle.textContent = "Add a user";
  submitBtn.textContent = "Save user";
  cancelBtn.classList.add("hidden");
  formError.textContent = "";
}

function loadIntoForm(id) {
  const u = usersCache[id];
  if (!u) return;

  userIdField.value = id;
  fullNameField.value = u.fullName;
  emailField.value = u.email;
  ageField.value = u.age;
  cityField.value = u.city;
  professionField.value = u.profession;

  formTitle.textContent = "Edit user";
  submitBtn.textContent = "Update user";
  cancelBtn.classList.remove("hidden");
  formError.textContent = "";

  userForm.scrollIntoView({ behavior: "smooth", block: "start" });
}
async function handleDelete(id) {
  const u = usersCache[id];
  const name = u ? u.fullName : "this user";
  const confirmed = window.confirm(`Delete ${name}? This cannot be undone.`);
  if (!confirmed) return;

  try {
    await deleteDoc(doc(db, "usersCollection", id));
    showToast("User deleted.", "success");
    
    if (userIdField.value === id) resetForm();
  } catch (error) {
    console.error("Failed to delete user:", error);
    showToast("Could not delete this user. Please try again.", "error");
  }
}


function openViewModal(id) {
  const u = usersCache[id];
  if (!u) return;

  modalBody.innerHTML = `
    <dt>Full name</dt><dd>${escapeHtml(u.fullName)}</dd>
    <dt>Email</dt><dd>${escapeHtml(u.email)}</dd>
    <dt>Age</dt><dd>${escapeHtml(String(u.age))}</dd>
    <dt>City</dt><dd>${escapeHtml(u.city)}</dd>
    <dt>Profession</dt><dd>${escapeHtml(u.profession)}</dd>
  `;
  viewModal.classList.remove("hidden");
}
modalCloseBtn.addEventListener("click", () => viewModal.classList.add("hidden"));
viewModal.addEventListener("click", (e) => {
  if (e.target === viewModal) viewModal.classList.add("hidden");
});

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}


function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value ?? "";
  return div.innerHTML;
}
