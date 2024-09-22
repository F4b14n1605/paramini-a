// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla u3u", time: 15 },
  { text: "ella lo estaba soñando con la luz en su pupila ", time: 23.5 },
  { text: "y el amarillo del sol iluminaba la esquina O:", time: 31 },
  { text: "Lo sentía tan cercano", time: 37 },
  { text: "Lo sentía desde niña uwu", time: 38},
  { text: "Ella sabía que él sabía que algún día pasaría uwu", time: 43},
  { text: "Que vendría a buscarla con sus flores amarillas UWU", time:49 },
  { text: "No te apures, no detengas", time: 55},
  { text: "el instante del encuentro", time: 57.2},
  { text: "Está dicho que es un hecho", time: 60},
  { text: "No la pierdas, no hay derecho", time:61 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 62},
  { text: "Te amo Jasmin ❥◕⩊◕🌸", time: 70},
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.4; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);