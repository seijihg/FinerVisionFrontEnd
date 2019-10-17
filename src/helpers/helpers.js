const API_base = "http://127.0.0.1:8000/api/users"

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(phone) {
  const re = /^\(?(07)( *\d\)?){9}$/
  return re.test(phone)
}

const submitForm = (data) =>{
  let token = '<?php echo csrf_token(); ?>'
  return fetch(API_base, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
     "Accept": "application/json, text-plain, */*",
     "X-CSRF-TOKEN": token
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export default {
  validateEmail,
  validatePhone,
  submitForm
}