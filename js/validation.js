export const validate = input => {
  const dataType = input.dataset.type;
  const parent = input.parentElement;
  const errorSpan = parent.querySelector('.contact__input_error');

  if (input.validity.valid) {
    errorSpan.classList.remove('input--invalid');
    errorSpan.textContent = '';
  } else {
    errorSpan.classList.add('input--invalid');
    errorSpan.textContent = showError(input, dataType);
  }
};

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError',
];

const errorMsg = {
  name: {
    valueMissing: 'Este campo no puede estar vacío',
  },
  email: {
    valueMissing: 'Este campo no puede estar vacío',
    typeMismatch: 'El correo no es válido',
  },
  subject: {
    valueMissing: 'Este campo no puede estar vacío',
  },
  message: {
    valueMissing: 'Este campo no puede estar vacío',
  },
};

const showError = (input, type) => {
  let message = '';

  errorTypes.forEach(error => {
    if (input.validity[error]) {
      message = errorMsg[type][error];
    }
  });

  return message;
};
