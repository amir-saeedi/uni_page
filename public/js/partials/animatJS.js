const sectionAnimat = function (name, cl) {
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.classList.add(cl);
      observer.unobserve(entry.target);
    }
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  sectionObserver.observe(name);
};
export { sectionAnimat };
