const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('#emailInput');
const textArea = form.querySelector('#textArea');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
