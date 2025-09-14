const lines = [
  { time: 11, text: "Hace mucho tiempo le hago caso al corazón" },
  { time: 17, text: "Y pasan los día', los mese' pensando en tu olor" },
  { time: 23, text: "Ha llegado el tiempo para usar la razón" },
  { time: 29, text: "Ante' que sea tarde y sin querer me parta en do'" },

  { time: 35, text: "Antes de que salga el sol y hunda el acelerador" },
  { time: 38, text: "Que vaya sin frenos y pierda el control" },
  { time: 41, text: "Nada más seremos do', tú y yo acariciándono'" },
  { time: 44, text: "En medio del tiempo, sin decir adiós" },
  
  { time: 47, text: "Y solo mírame con esos ojito' lindo'" },
  { time: 52, text: "Que con eso yo estoy bien" },
  { time: 55, text: "Hoy he vuelto a nacer'" },

  { time: 59, text: "Hacе tiempo que no agarro a nadie de la mano" },
  { time: 65, text: "Hace tiempo que no envío: buenos días, te amo" },

  { time: 70, text: "Pero tú me tiene' enredao, me envolví" },
  { time: 74, text: "Iba por mi camino y me perdí" },
  { time: 76, text: "Mi mirada cambió cuando tus ojos vi" },
  { time: 80, text: "Bye-bye a los culo', ni me despedí'" },

  { time: 83, text: "Yo no te busqué, no" },
  { time: 86, text: "Chocamo' en el trayecto" },
  { time: 88, text: "Con tu alma es la que yo conecto" },
  { time: 91, text: "Tranquila, no tiene que ser perfecto, no'" },  
];

const audio = document.getElementById('song');
const lyricsDiv = document.getElementById('lyrics');
let currentLine = -1;

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;

  for (let i = 0; i < lines.length; i++) {
    if (currentTime >= lines[i].time && currentLine < i) {
      currentLine = i;
      const p = document.createElement('p');
      p.textContent = lines[i].text;
      p.style.opacity = 0;
      lyricsDiv.appendChild(p);
      setTimeout(() => {
        p.style.opacity = 1;
      }, 100);
    }
  }
});
