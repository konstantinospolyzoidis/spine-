document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
      return;
    }

    if (!validateEmail(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.style.color = 'red';
      return;
    }

    status.textContent = 'Sending...';
    status.style.color = 'black';

    try {
      // Simulate sending - replace with actual backend API call if available
      await fakeSendMessage({ name, email, message });

      status.textContent = 'Thank you for your message! We will get back to you soon.';
      status.style.color = 'green';
      form.reset();
    } catch (error) {
      status.textContent = 'Oops! Something went wrong. Please try again later.';
      status.style.color = 'red';
    }
  });

  function validateEmail(email) {
    // Basic email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function fakeSendMessage(data) {
    // Simulated async API call delay
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
});
