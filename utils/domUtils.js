const createElementRepo = (name, content, classes) => {
  const element = document.createElement(name);
  element.append(content);
  element.classList.add(...classes);

  return element;
};
export { createElementRepo };
