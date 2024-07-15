import formData from "./package.jcon"
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const formDataEl = { name, email, message };
  
    saveFormData(formDataEl);

  
    document.getElementById('messageBox').innerText = 'Форма успішно відправлена!';
  });
  


