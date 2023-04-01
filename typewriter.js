// Typewriter function
const typewriter = (elementId, texts, speed, pauseBetweenTexts, loopCount, hideOnEnd = false) => {
  let index = 0;
  let currentTextIndex = 0;
  let currentLoopCount = 0;
  const element = document.getElementById(elementId);

  const type = () => {
    if ((loopCount === 0 || currentLoopCount < loopCount) && currentTextIndex < texts.length) {
      if (index < texts[currentTextIndex].length) {
        element.innerHTML = texts[currentTextIndex].slice(0, index) + '<span class="cursor">|</span>';
        index++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          index = 0;

          if (!(loopCount > 0 && !hideOnEnd && texts.length === 1 && currentLoopCount + 1 === loopCount)) {
            element.innerHTML = '';
          }

          currentTextIndex++;

          if (currentTextIndex >= texts.length) {
            currentTextIndex = 0;
            currentLoopCount++;
          }

          if (loopCount === 0 || currentLoopCount < loopCount) {
            type();
          }
        }, pauseBetweenTexts);
      }
    }
  };

  type();
};
