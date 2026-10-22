document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  if (!form) return;
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const agree = document.getElementById('agree');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.className = 'form-message';
    message.textContent = '';

    const loginPattern = /^[A-Za-z][A-Za-z0-9_]{2,19}$/;
    if (!loginPattern.test(username.value.trim())) {
      message.textContent = 'Имя пользователя должно содержать 3–20 символов: латинские буквы, цифры или _. Начните с латинской буквы.';
      message.classList.add('error');
      username.focus();
      return;
    }
    if (password.value.length < 8) {
      message.textContent = 'Пароль должен содержать не менее 8 символов.';
      message.classList.add('error');
      password.focus();
      return;
    }
    if (password.value !== confirmPassword.value) {
      message.textContent = 'Пароли не совпадают. Проверьте оба поля.';
      message.classList.add('error');
      confirmPassword.focus();
      return;
    }
    if (!agree.checked) {
      message.textContent = 'Подтвердите, что понимаете назначение демонстрационной формы.';
      message.classList.add('error');
      agree.focus();
      return;
    }

    message.textContent = 'Проверка пройдена! Это демонстрационная форма: аккаунт не создан, данные никуда не отправляются.';
    message.classList.add('success');
    form.reset();
  });
});