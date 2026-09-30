const titel = "Stefans Pokédex — Enjoy and have fun! ";
  let position = 0;


async function init()

  setInterval(() => {
    document.title =
      titel.substring(position) + titel.substring(0, position);

    position = (position + 1) % titel.length;
  }, 200);