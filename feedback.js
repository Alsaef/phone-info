const scriptURL = 'https://script.google.com/macros/s/AKfycbyb7jNYwd2P3f0a49qAHqjR5iO3njUvauU4Acx-VUcPiplNgCoMAHYjyy147BwhB795mA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    const email=document.getElementById("email");
    email.value="";
    const name=document.getElementById("name");
    name.value="";
    const text=document.getElementById("text");
    text.value="";
    const pSuccess=document.getElementById("success");
    pSuccess.innerText="Thank You For Your Feedback !";
    pSuccess.style.color="#FF1493"
    pSuccess.style.padding="5px"
})