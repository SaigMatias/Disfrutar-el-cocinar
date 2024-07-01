const elemCreator = (elem, content, attach, id) => {
  const elemCreation = document.createElement(elem);
  elemCreation.innerHTML = content;
  elemCreation.id = id;
  document.querySelector(attach).append(elemCreation);
  return elemCreation;
};

export default elemCreator;
