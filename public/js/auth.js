
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/');
      } else {
        alert("Something went wrong!", response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
event.preventDefault();

const name = document.querySelector('#user-name-signup').value.trim();
const email = document.querySelector('#user-email-signup').value.trim();
const password = document.querySelector('#user-password-signup').value.trim();

if (name && email && password) {
    const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert(response.statusText);
    }
}
};

const logout = async () => {
const response = await fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
});

if (response.ok) {
    document.location.replace('/login');
} else {
    alert(response.statusText);
}
};
  
document.querySelector('#logout').addEventListener('click', logout);

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);