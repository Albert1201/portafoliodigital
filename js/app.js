import { validate } from './validation/validation.js';

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

const inputs = [nameInput, emailInput, subjectInput, messageInput];
const allInputHaveData = [];

inputs.forEach(input => {
  input.addEventListener('blur', e => {
    validate(input);
  });
});
