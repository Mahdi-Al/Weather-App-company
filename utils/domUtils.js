const createElement = (name, content, classes) => {
  const element = document.createElement(name);
  element.append(content);
  element.classList.add(...classes);

  return element;
};
export { createElement };
