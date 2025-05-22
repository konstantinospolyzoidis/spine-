document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const darkToggle = document.getElementById('dark-mode-toggle');
  const scrollBtn = document.getElementById('scrollToTopBtn');

  // Initialize dark mode based on saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    body.classList.add('dark');
  }

  // Dark mode toggle button click handler
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Show/hide scroll to top button on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  // Scroll to top button click handler
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
