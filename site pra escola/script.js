const IMAGES = {
  "sushi": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggcx1H_iT4vTBkXJLj-T__RUoLFLe3K-vsJ5ZG6nLq1ZDCHfrs8M40wHFSndP5Zhvcx4b6_QwukYkDUzE1nAlQlR8mmmgpRH1iFrO5IDJV0urT5z_hRWUU0Pi6o3979x2cdJQJ-7iPJ2WIDeOhU6egT8-IbkzLRsDxUlWqpFSJkR4Nrn8ZT7u3b1Mk/s2000/receita-de-sushi.jpg",
  "sashimi": "https://m.media-amazon.com/images/I/71HEUz0cJ7L._AC_UF894,1000_QL80_.jpg",
  "tempura1": "https://feedmechannel.com/wp-content/uploads/2020/04/tempura-de-camarao-e-legumes.jpg",
  "tempura2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhTJEs9pRDES4aYy9FZBzwQ0YtfzyH-FgafotvzSscOf9kgW3sswSU1r-ZI2xMwYX7Jo&usqp=CAU",
  "lamen": "https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/08104850/Ramen.webp",
  "yakisoba": "https://s01.video.glbimg.com/x720/10732588.jpg",
  "tempura3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_oYXC6TKC5XaEFAQ8NuWwcNPDPyAKwC-5g&s",
  "matcha": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhTJEs9pRDES4aYy9FZBzwQ0YtfzyH-FgafotvzSscOf9kgW3sswSU1r-ZI2xMwYX7Jo&usqp=CAU"
};

const DATA = {
  "Sushi": { img: IMAGES.sushi, categoria: "Prato Principal", dificuldade: "Difícil", tempo: "30-60 min", origem: "Japão", about: "O sushi é um dos pratos mais icônicos...", ingredientes: "Arroz, nori, peixe", preparo: "1. Cozinhe o arroz\n2. Corte o peixe\n3. Monte o sushi" },
  "Ramen": { img: IMAGES.lamen, categoria: "Prato Principal", dificuldade: "Média", tempo: "3-12 horas", origem: "China", about: "Ramen é comfort food...", ingredientes: "Macarrão, caldo, ovo", preparo: "1. Prepare caldo\n2. Cozinhe macarrão\n3. Monte a tigela" },
  "Tempura": { img: IMAGES.tempura1, categoria: "Aperitivo", dificuldade: "Média", tempo: "20-30 min", origem: "Portugal/Japão", about: "Frutos do mar e vegetais empanados...", ingredientes: "Camarão, vegetais, farinha", preparo: "1. Misture a massa\n2. Passe os ingredientes\n3. Frite" },
  "Yakitori": { img: IMAGES.yakisoba, categoria: "Aperitivo", dificuldade: "Fácil", tempo: "15-25 min", origem: "Japão", about: "Espetinhos de frango grelhados...", ingredientes: "Frango, cebolinha, molho tare", preparo: "1. Corte o frango\n2. Grelhe\n3. Pincele molho" },
  "Matcha": { img: IMAGES.tempura2, categoria: "Bebida", dificuldade: "Média", tempo: "5-10 min", origem: "Japão", about: "Pó de chá verde...", ingredientes: "Matcha, água", preparo: "1. Aqueça água\n2. Misture o pó\n3. Bata" },
  "Bento": { img: IMAGES.tempura3, categoria: "Refeição Completa", dificuldade: "Média", tempo: "20-40 min", origem: "Japão", about: "Caixa organizada com arroz, proteína...", ingredientes: "Arroz, frango, legumes", preparo: "1. Cozinhe arroz\n2. Monte caixa\n3. Sirva" }
};

const cardsContainer = document.getElementById('cards');
const modal = document.getElementById('modal');
const setAttr = (id, value) => document.getElementById(id).textContent = value;

Object.keys(DATA).forEach(key => {
  const d = DATA[key];
  const card = document.createElement('article');
  card.className = 'card';
  card.onclick = () => openDetail(key);
  card.innerHTML = `
    <div class="media">
      <img src="${d.img}" alt="${key}">
      <div class="pill">${d.categoria}</div>
    </div>
    <div class="body">
      <h3>${key}</h3>
      <div class="meta">
        <div class="tag">${d.dificuldade}</div>
        <div class="tag">${d.tempo}</div>
      </div>
      <p class="excerpt">${d.about}</p>
    </div>
  `;
  cardsContainer.appendChild(card);
});

function openDetail(key) {
  const data = DATA[key];
  if (!data) return;
  document.getElementById('detailImg').src = data.img;
  document.getElementById('detailImg').alt = key;
  setAttr('detailTitle', key);
  setAttr('detailCate', data.categoria);
  setAttr('detailDiff', data.dificuldade);
  setAttr('detailTime', data.tempo);
  setAttr('detailAbout', data.about);
  setAttr('detailIngr', data.ingredientes);
  setAttr('detailPrep', data.preparo);
  const originBox = document.getElementById('detailOrig');
  if (data.origem) {
    document.getElementById('origTxt').textContent = data.origem;
    originBox.style.display = 'block';
  } else originBox.style.display = 'none';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
}

function closeDetail() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = '';
}

modal.addEventListener('click', e => { if(e.target === modal) closeDetail(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDetail(); });