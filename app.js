document.addEventListener("DOMContentLoaded", () => {
  const panel = document.querySelector("#panel");
  const panelContent = panel.textContent;
  // eslint-disable-next-line no-console
  console.log(panelContent);

  // let getTextContent = (number) => {}
  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const three = document.querySelector("#three");
  const four = document.querySelector("#four");
  const five = document.querySelector("#five");
  const six = document.querySelector("#six");
  const seven = document.querySelector("#seven");
  const eight = document.querySelector("#eight");
  const nine = document.querySelector("#nine");
  const cero = document.querySelector("#cero");
  const point = document.querySelector("#point");
  let points = 0;

  one.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += one.textContent;
    }
  });

  two.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += two.textContent;
    }
  });

  three.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += three.textContent;
    }
  });

  four.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += four.textContent;
    }
  });

  five.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += five.textContent;
    }
  });

  six.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += six.textContent;
    }
  });

  seven.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += seven.textContent;
    }
  });

  eight.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += eight.textContent;
    }
  });

  nine.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += nine.textContent;
    }
  });

  cero.addEventListener("click", () => {
    if (panel.textContent.length <= 7) {
      panel.textContent += cero.textContent;
    }
  });

  point.addEventListener("click", () => {
    if (panel.textContent.length <= 7 && points === 0) {
      panel.textContent += point.textContent;
      points++
    }
  });
});
