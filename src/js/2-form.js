const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('#emailInput');
const textArea = form.querySelector('#textArea');

email.addEventListener('input', handleEmailInput);

function handleEmailInput(event) {
  const emailValue = event.target.value;
  localStorage.setItem(STORAGE_KEY, emailValue);
}
