const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.emailInput');
const messageInput = document.querySelector('.messageInput');

if (localStorage.getItem('feedback-form-state')) {
  emailInput.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  messageInput.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

emailInput.addEventListener('input', () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
});

messageInput.addEventListener('input', () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value.length == 0 || messageInput.value.length == 0) {
    alert('Formdaki tüm alanları doldurunuz!');
  } else {
    console.log(
        {
            email: emailInput.value,
            messageInput: messageInput.value,
        }
    )
    localStorage.clear;
    feedbackForm.reset();
  }
});
