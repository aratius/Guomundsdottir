javascript: (function () {
  document.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target && event.target.nodeType === Node.ELEMENT_NODE && event.target.innerText.trim() !== '') {

      var effects = [
        function (element) {
          var backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
          element.style.color = 'white';
          element.style.backgroundColor = backgroundColor;
        },
        function (element) {
          element.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
        },
        function (element) {
          element.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
          element.style.webkitBackgroundClip = 'text';
          element.style.color = 'transparent';
        },
        function (element) {
          element.style.border = '2px solid';
          element.style.borderImage = 'linear-gradient(45deg, red, blue) 1';
          element.style.animation = 'border-dance 0.3s infinite linear';
        },
        function (element) {
          element.style.textShadow = '-2px 0 red, 2px 0 blue';
          element.style.animation = 'glitch 0.1s infinite';
        },
        function (element) {
          element.style.animation = 'blink 0.1s infinite';
        },
        function (element) {
          element.style.animation = 'slide-in 0.1s forwards';
        },
        function (element) {
          element.style.backgroundAttachment = 'fixed';
        },
        function (element) {
          element.style.transform = 'rotateY(360deg)';
          element.style.animation = 'spin 0.3s infinite linear';
        },
        function (element) {
          element.style.display = 'inline-block';
          element.style.animation = 'wave 0.3s infinite ease-in-out';
        }
      ];


      setInterval(() => {
        var randomEffect = effects[Math.floor(Math.random() * effects.length)];
        randomEffect(event.target);
      }, 1000);
    }

  }, { passive: false });


  var style = document.createElement('style');
  style.innerHTML = `
        @keyframes border-dance {
            0% { border-image: linear-gradient(45deg, red, blue) 1; }
            100% { border-image: linear-gradient(45deg, blue, red) 1; }
        }
        @keyframes glitch {
            0% { transform: skew(0deg); }
            20% { transform: skew(10deg); }
            40% { transform: skew(-10deg); }
            60% { transform: skew(10deg); }
            80% { transform: skew(-10deg); }
            100% { transform: skew(0deg); }
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        @keyframes slide-in {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes spin {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
        }
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
  document.head.appendChild(style);
})();
