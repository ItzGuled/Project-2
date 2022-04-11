async function loginFormHandler(event) {
  // event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
    
  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {      
      document.location.replace('/');
    } else {      
      alert(response.statusText);
    }
  }
}


async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const genre_preference = document.querySelector('#genre').value.trim();

  
  if (username && email && password) {
    const response = await fetch('api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        genre_preference
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector('.login-btn').addEventListener('click', loginFormHandler);


document.querySelector('.signup').addEventListener('submit', signupFormHandler);
