const userName = 'Admin';

function greetUser(username) {
  if (username === 'Admin') {
    console.log('Welcome, Admin');
    console.log('You have full access to the system');
  } else {
    console.log('Hello, ' + username + '!');
  }
}

function checkAccess(role) {
  if (role === 'admin') {
    console.log('Access granted');
  } else {
    console.log('Access denied');
  }
}

greetUser(userName);
checkAccess('admin');