  const music = document.getElementById('music');
  let currentResto = '';
  let chosenResto = '';

  const restos = {
    villa: {
      name: 'Villa Lana',
      addr: 'Riviera Golf, Rue D30',
      logo: 'img/villa_logo.png',
      lieuPhotos: [
        'img/villa/lieu1.jpg',
        'img/villa/lieu2.jpg'
      ],
      platsPhotos: [
        'img/villa/plat1.jpg',
        'img/villa/plat2.jpg'
      ]
    },
    bnb: {
      name: 'BNB',
      addr: 'Cocody Riviera Palmeraie, Rue I220',
      logo: 'img/bnb_logo.jpeg',
      lieuPhotos: [
        'img/bnb/lieu1.jpeg',
        'img/bnb/lieu2.jpeg',
        'img/bnb/lieu3.webp'
      ],
      platsPhotos: [
        'img/bnb/plat1.jpeg',
        'img/bnb/plat2.jpeg',
        'img/bnb/plat3.jpeg'
      ]
    },
    texas: {
      name: 'Texas Grillz',
      addr: 'Cocody Deux plateaux; Riviera jardin; Cité des arts; Yopougon Maroc',
      logo: 'img/texas_logo.jpeg',
      lieuPhotos: [
        'img/texas/lieu1.jpg',
        'img/texas/lieu2.jpeg',
        'img/texas/lieu3.jpeg'
      ],
      platsPhotos: [
        'img/texas/plat1.jpeg',
        'img/texas/plat2.jpeg',
        'img/texas/plat3.jpeg'
      ]
    }
  };

  function type(el, text, i = 0) {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      setTimeout(() => type(el, text, i + 1), 30);
    }
  }

  type(t1, "J'ai une surprise pour toi 💕");

  function start() {
    music.play();
    s1.classList.add('hidden');
    s2.classList.remove('hidden');
    type(t2, `Depuis que tu es entrée dans ma vie,
plus rien n’est pareil.
Tu es devenue mon calme,
mon sourire dans les moments difficiles,
et ma plus belle habitude chaque jour.

Je n’aime pas seulement passer du temps avec toi,
j’aime qui je deviens quand je suis avec toi.
Tu me fais me sentir compris, accepté,
et profondément aimé.

Même quand on se dispute,
même quand on ne se comprend pas tout de suite,
mon cœur ne doute jamais de toi.
Parce que ce que je ressens pour toi est plus fort
que n’importe quelle difficulté.

Je ne veux pas juste être quelqu’un dans ta vie.
Je veux être celui qui te soutient,
qui te protège,
qui te fait rire quand tu veux pleurer,
et qui marche à tes côtés, peu importe la route.

Aujourd’hui, je ne te parle pas comme un garçon lambda,
ni comme un ami,
mais comme quelqu’un qui t’aime sincèrement,
de tout son cœur.`);
  }

  function goQuestion() {
    s2.classList.add('hidden');
    s3.classList.remove('hidden');
    type(t3, "Veux-tu être ma Valentine ? 💖");
  }

  let ns = 1, ys = 1;
  no.onclick = () => {
    ns -= 0.15;
    no.style.transform = `scale(${ns})`;
    ys += 0.1;
    yes.style.transform = `scale(${ys})`;
    if (ns < 0.1) no.style.display = 'none';
  };

  yes.onclick = () => {
    s3.classList.add('hidden');
    s4.classList.remove('hidden');
  };

  function showResto(restoId) {
    currentResto = restoId;
    const r = restos[restoId];
    restoLogo.src = r.logo;
    restoName.innerText = r.name;
    restoAddr.innerText = r.addr;
    s4.classList.add('hidden');
    s5.classList.remove('hidden');
  }

  function backToCards() {
    s5.classList.add('hidden');
    s4.classList.remove('hidden');
    s6.classList.add('hidden');
    s7.classList.add('hidden');
    s8.classList.add('hidden');
  }

  function backToDetail() {
    s6.classList.add('hidden');
    s7.classList.add('hidden');
    s5.classList.remove('hidden');
  }

  function showLieu() {
    const r = restos[currentResto];
    lieuName.innerText = r.name;
    let html = '';
    r.lieuPhotos.forEach(url => { html += `<img src="${url}" alt="Lieu">`; });
    lieuGallery.innerHTML = html;
    s5.classList.add('hidden');
    s6.classList.remove('hidden');
  }

  function showPlats() {
    const r = restos[currentResto];
    platsName.innerText = r.name;
    let html = '';
    r.platsPhotos.forEach(url => { html += `<img src="${url}" alt="Plat">`; });
    platsGallery.innerHTML = html;
    s5.classList.add('hidden');
    s7.classList.remove('hidden');
  }

  function chooseResto() {
    const r = restos[currentResto];
    chosenResto = r.name;
    const message = `Othniel 💖%0AJ'ai choisi le restaurant ${chosenResto} pour notre dîner de Saint-Valentin 😘`;
    window.open(`https://wa.me/225767842730?text=${message}`, '_blank');
    s5.classList.add('hidden');
    s6.classList.add('hidden');
    s7.classList.add('hidden');
    finalText.innerText = `Tu as choisi : ${chosenResto} 💕`;
    s8.classList.remove('hidden');
  }
