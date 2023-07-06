let allData = (JSON.parse(localStorage.getItem('register')))
  ? JSON.parse(localStorage.getItem('register'))
  : [
    {
      id: 1,
      name: 'Gaurav',
      email: 'gaurav@gmail.com',
      password: '1234',
      role: 'admin'
    }
  ];
localStorage.setItem('register', JSON.stringify(allData));
const register = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cpassword = document.getElementById('cpassword').value;
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields!');
  } else {
    let data = JSON.parse(localStorage.getItem('register')) || [];
    let find = data.find((v) => {
      return v.email === email
    });
    if (find) {
      alert('Email already exists');
    } else {
      if(password === cpassword){
        let obj = {
          id: Math.floor(Math.random() * 100),
          name: name,
          email: email,
          password: password,
          role: 'user'
        };
        data.push(obj);
        localStorage.setItem('register', JSON.stringify(data));
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        window.location.href = 'signin.html';
      }else{
        alert("Passwords don't match"); 
      }
    }
  }
};
const login = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let role = document.getElementById('role').value;
  let data = JSON.parse(localStorage.getItem('register')) || [];
  let ans = data.filter((v) => {
    return v.email === email;
  });
  if (email === '' || password === '') {
    alert('Please fill in all fields!');
  } else {
    if (ans) {
      if (ans[0].password === password) {
        if (ans[0].role === role) {
          alert('Login successful!');
          localStorage.setItem('userLogin', JSON.stringify(ans));
          window.location.href = 'index.html';
        } else {
          alert('Your role does not match!');
        }
      } else {
        alert('Incorrect password!');
      }
    } else {
      alert('Incorrect email!');
    }
  }
};
const forgot = () => {
  window.location.href = 'cmail.html';
};
const check = () => {
  let email = document.getElementById('email').value;
  let data = JSON.parse(localStorage.getItem('register')) || [];
  console.log(data);
  let found = false;
  let obj = '';
  let ans = data.filter((val) => {
    return val.email === email;
  });
  if (ans) {
    found = true;
    obj = {
      userid: Math.floor(Math.random() * 2),
      email: email,
    };
  }
  if (found) {
    alert(obj.userid);
    ans.push(obj);
    localStorage.setItem('Otp', JSON.stringify(ans));
    window.location.href = 'otp.html';
    document.getElementById('email').value = '';
  } else {
    alert('Incorrect email!');
  }
};
const otpchecker = () => {
  let otp = JSON.parse(localStorage.getItem('Otp')) || [];
  let userid = document.getElementById('otp').value;
  let found = false;
  for (let i in otp) {
    if (otp[i].userid == userid) {
      found = true;
      break;
    }
  }
  if (found) {
    window.location.href = 'replacepassword.html';
    document.getElementById('otp').value = '';
  } else {
    alert('Wrong OTP!');
  }
};
const newpass = () => {
  let npass = document.getElementById('npassword').value;
  let cpass = document.getElementById('cpassword').value;
  let data = JSON.parse(localStorage.getItem('register'));
  let otp = JSON.parse(localStorage.getItem('Otp'));
  if (npass === cpass) {
    for (let i in data) {
      if (data[i].email === otp[0].email) {
        data[i].password = cpass;
        break;
      }
    }
    alert('Your password has been changed!');
    localStorage.setItem('register', JSON.stringify(data));
    window.location.href = 'signin.html';
  } else {
    alert('The passwords do not match!');
  }
};
const logout = () => {
  localStorage.removeItem('userLogin');
  window.location.href = 'signin.html';
};