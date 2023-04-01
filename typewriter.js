const typewriter = (elementId, texts, speed, blinkSpeed, pauseBetweenTexts, loopCount) => {
  let index = 0;
  let currentTextIndex = 0;
  let currentLoopCount = 0;
  const element = document.getElementById(elementId);

  const type = () => {
    if (currentLoopCount < loopCount && currentTextIndex < texts.length) {
      if (index < texts[currentTextIndex].length) {
        element.innerHTML = texts[currentTextIndex].slice(0, index) + '<span class="cursor">|</span>';
        index++;
        setTimeout(type, speed);
      } else {
        blink(2, blinkSpeed);
      }
    }
  };

  const blink = (remainingBlinks, blinkSpeed) => {
    if (remainingBlinks > 0) {
      element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
      remainingBlinks--;
      setTimeout(() => blink(remainingBlinks, blinkSpeed), blinkSpeed);
    } else {
      element.style.visibility = 'visible';
      setTimeout(() => {
        index = 0;
        element.innerHTML = '';
        currentTextIndex++;

        if (currentTextIndex >= texts.length) {
          currentTextIndex = 0;
          currentLoopCount++;
        }

        if (currentLoopCount < loopCount) {
          type();
        }
      }, pauseBetweenTexts);
    }
  };

  type();
};

// Add CSS for the cursor
const style = document.createElement('style');
style.innerHTML = `
  .cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Customize the texts, element ID, typing speed, blink speed, pause between texts, and loop count as needed
typewriter("typewriter", ["This is the first text.", "And this is the second one!"], 100, 500, 1000, 3);
