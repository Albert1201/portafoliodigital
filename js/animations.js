const scrollAnimateAnchorLinks = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  const sections = {
    '#about': document.querySelector('#about'),
    '#skills': document.querySelector('#skills'),
    '#hobbies': document.querySelector('#hobbies'),
    '#education': document.querySelector('#education'),
    '#portfolio': document.querySelector('#portfolio'),
    '#contact': document.querySelector('#contact'),
  };
  anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();

      const idAnchor = e.target.getAttribute('href');
      const section = sections[idAnchor];

      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

scrollAnimateAnchorLinks();
