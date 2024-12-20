
  function revealContentOnScroll() {
    const innerContents = document.querySelectorAll('.inner-content');

    innerContents.forEach((content) => {
      const rect = content.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        content.classList.add('inner-content-visible');
        content.classList.remove('inner-content-hidden');
      }
    });
  }

  // Attach scroll event listener
  document.addEventListener('scroll', revealContentOnScroll);

  // Add the initial hidden state to all inner content elements
  document.addEventListener('DOMContentLoaded', () => {
    const innerContents = document.querySelectorAll('.inner-content');
    innerContents.forEach((content) => content.classList.add('inner-content-hidden'));
  });
