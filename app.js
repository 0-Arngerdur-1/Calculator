document.addEventListener('DOMContentLoaded', () => {
  const panel = document.querySelector('#panel');
  const panelContent = panel.textContent;
  // eslint-disable-next-line no-console
  console.log(panelContent);

  // let getTextContent = (number) => {}

  const seven = document.querySelector('#seven');
  seven.addEventListener('click', () => {
    panel.textContent += seven.textContent;
  });

  const two = document.querySelector('#two');
  two.addEventListener('click', () => {
    panel.textContent += two.textContent;
  });
});
