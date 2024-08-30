javascript: (function () {
  document.addEventListener('click', function (event) {
    event.preventDefault();

    /** テキストを持つ要素に対して処理を行う */
    if (event.target && event.target.nodeType === Node.ELEMENT_NODE) {

      var originalText = event.target.innerText;
      if (originalText.trim() !== '') {
        var lines = [0, 0, 0, 0];
        var seed = Math.random();
        var interval = setInterval(function () {
          event.target.innerHTML = lines.map((l, i) => {
            const phase = Math.sin(Date.now() / 1000 * 5 + i) * 0.5 + 0.5;
            const visibleText = originalText.slice(0, Math.floor(phase * originalText.length + 1));
            const backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            const fontSize = `${Math.random() * 20 + 10}px`;
            const color = `hsl(${Math.random() * 360}, 100%, 70%)`;


            return [
              `<span style="color:${color};">${visibleText}</span>`,
              `<span style="color:${color}; font-size:${fontSize};">${visibleText}</span>`,
              `<span style="color:white; background-color:${backgroundColor};">${visibleText}</span>`
            ][Math.floor(seed * 3)];
          }).join("<br>");
        }, 100);
      }
    }
  }, { passive: false });
})();