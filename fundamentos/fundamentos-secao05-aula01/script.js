const a = document.getElementById("#href");
a.addEventListener('click', (event) => {event.preventDefault();});

const b = document.getElementById("#input-checkbox");
b.addEventListener('click', (event) => {event.preventDefault();});

inputText.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
  });
