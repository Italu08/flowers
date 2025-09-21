// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Look at the stars", time: 13 },
  { text: "Look how they shine for you", time: 18 },
  { text: "And everything you do", time: 23 },
  { text: "Yeah, they were all yellow", time: 28 },

  // Verso 1
  { text: "I came along", time: 37 },
  { text: "I wrote a song for you", time: 42 },
  { text: "And all the things you do", time: 47 },
  { text: "And it was called Yellow", time: 52 },

  { text: "So then I took my turn", time: 61 },
  { text: "Oh, what a thing to have done", time: 66 },
  { text: "And it was all yellow", time: 71 },

  // Coro 1
  { text: "Your skin", time: 81 },
  { text: "Oh yeah, your skin and bones", time: 86 },
  { text: "Turn into something beautiful", time: 91 },
  { text: "Do you know, you know I love you so?", time: 98 },
  { text: "You know I love you so", time: 103 },

  // Verso 2
  { text: "I swam across", time: 112 },
  { text: "I jumped across for you", time: 117 },
  { text: "Oh, what a thing to do", time: 122 },
  { text: "'Cause you were all yellow", time: 127 },

  { text: "I drew a line", time: 136 },
  { text: "I drew a line for you", time: 141 },
  { text: "Oh, what a thing to do", time: 146 },
  { text: "And it was all yellow", time: 151 },

  // Coro 2
  { text: "Your skin", time: 161 },
  { text: "Oh yeah, your skin and bones", time: 166 },
  { text: "Turn into something beautiful", time: 171 },
  { text: "Do you know, for you I'd bleed myself dry?", time: 178 },
  { text: "For you I'd bleed myself dry", time: 184 },

  // Puente
  { text: "It's true", time: 198 },
  { text: "Look how they shine for you", time: 202 },
  { text: "Look how they shine for you", time: 208 },
  { text: "Look how they shine for", time: 214 },
  { text: "Look how they shine for you", time: 220 },
  { text: "Look how they shine for you", time: 225 },
  { text: "Look how they shine", time: 231 },

  // Outro
  { text: "Look at the stars", time: 240 },
  { text: "Look how they shine for you", time: 246 },
  { text: "And all the things that you do", time: 252 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 200); // actualiza cada 200 ms

// Ocultar título después de 216 segundos (como pediste en tu ejemplo original)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}
setTimeout(ocultarTitulo, 216000);