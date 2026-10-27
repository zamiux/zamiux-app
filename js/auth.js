// احراز هویت نمایشی: کنترل نمایش رمز، کپچا و پیام وضعیت فرم‌ها.
document.querySelectorAll("[data-password-target]").forEach((toggle) => {
  const passwordInput = document.getElementById(toggle.dataset.passwordTarget);

  toggle.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    toggle.setAttribute("aria-pressed", String(isHidden));
    toggle.setAttribute("aria-label", isHidden ? "پنهان‌کردن کلمه عبور" : "نمایش کلمه عبور");
    toggle.querySelector("i").className = `bi ${isHidden ? "bi-eye-slash" : "bi-eye"}`;
  });
});

// ارقام فارسی و عربی برای بررسی پاسخ کپچا به ارقام لاتین تبدیل می‌شوند.
function normalizeDigits(value) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .trim();
}

document.querySelectorAll(".auth-form").forEach((form) => {
  const question = form.querySelector("[data-captcha-question]");
  const answer = form.querySelector("[data-captcha-answer]");
  const refresh = form.querySelector("[data-captcha-refresh]");
  const status = form.querySelector("[data-auth-status], .login-status");
  let expectedAnswer = 0;

  // پرسش تازه ساخته می‌شود و پاسخ قبلی پاک می‌شود.
  function refreshCaptcha() {
    const firstNumber = Math.floor(Math.random() * 8) + 2;
    const secondNumber = Math.floor(Math.random() * 8) + 2;
    expectedAnswer = firstNumber + secondNumber;
    question.textContent = `${firstNumber} + ${secondNumber} = ؟`;
    answer.value = "";
  }

  refresh?.addEventListener("click", refreshCaptcha);
  refreshCaptcha();

  // کپچا قبل از نمایش پیام وضعیت فرم بررسی می‌شود.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (Number(normalizeDigits(answer.value)) !== expectedAnswer) {
      status.textContent = "پاسخ کپچا درست نیست؛ عبارت تازه را حل کن.";
      status.hidden = false;
      refreshCaptcha();
      answer.focus();
      return;
    }

    status.textContent = form.dataset.authMessage;
    status.hidden = false;
  });
});

// فرم ثبت‌نام در صورت یکسان نبودن رمز و تکرار آن معتبر نمی‌شود.
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  const password = registerForm.querySelector("[data-password-source]");
  const confirmation = registerForm.querySelector("[data-password-confirm]");

  function validatePasswordMatch() {
    const mismatch = confirmation.value && password.value !== confirmation.value;
    confirmation.setCustomValidity(mismatch ? "کلمه‌های عبور با هم یکسان نیستند." : "");
  }

  password.addEventListener("input", validatePasswordMatch);
  confirmation.addEventListener("input", validatePasswordMatch);
}