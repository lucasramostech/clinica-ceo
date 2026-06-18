document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.container');
    if (botao && menu) {
        botao.addEventListener('click', () => menu.classList.toggle('is-open'));
    }

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
            if (e.isIntersecting)
                e.target.classList.add('visivel_universal');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.grid_galeria img, .card, .exam-card, .double a').forEach(el => observador.observe(el));
});

let posicao = 0;
const interna = document.querySelector('.interna');
const largura = () => document.querySelector('.interna .exam-card').offsetWidth;
const porClique = () => {
    const w = window.innerWidth;
    if (w <= 450) return 1;
    if (w <= 767) return 2;
    if (w <= 1023) return 3;
    return 4;
};

document.querySelector('.direita').addEventListener('click', () => {
    let coordenada = Math.abs(posicao) / largura();

    if (window.innerWidth <= 450) {
        if (coordenada < 19) {
            posicao -= largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 450 && window.innerWidth <= 767) {
        if (coordenada < 18) {
            posicao -= largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
        if (coordenada < 17 && coordenada != 12) {
            posicao -= largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
        if (coordenada == 12) {
            posicao -= largura() * 2;
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 1023) {
        if (coordenada < 15) {
            posicao -= largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }
});



const fotos = ['assets/img/foto1.png','assets/img/foto2.png','assets/img/foto3.png','assets/img/foto4.png','assets/img/foto5.png','assets/img/foto6.png','assets/img/foto7.png','assets/img/foto8.png','assets/img/foto9.png','assets/img/foto10.png','assets/img/foto11.png','assets/img/foto12.png','assets/img/foto13.png','assets/img/foto14.png'];let indice = 0;

function abrirGaleria(i) {
    indice = i;
    document.getElementById('lightbox-img').src = fotos[indice];
    document.getElementById('lightbox').style.display = 'flex';
}

function navegar(dir) {
    indice = (indice + dir + fotos.length) % fotos.length;
    document.getElementById('lightbox-img').src = fotos[indice];
}

function fechar() {
    document.getElementById('lightbox').style.display = 'none';
}




document.querySelector('.esquerda').addEventListener('click', () => {
    let coordenada = Math.abs(posicao) / largura();

    if (window.innerWidth <= 450) {
        if (coordenada > 0) {
            posicao += largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 450 && window.innerWidth <= 767) {
        if (coordenada > 0) {
            posicao += largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
        if (coordenada > 0 && coordenada != 5) {
            posicao += largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
        if (coordenada == 5) {
            posicao += largura() * 2;
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }

    if (window.innerWidth > 1023) {
        if (coordenada > 0) {
            posicao += largura() * porClique();
            interna.style.transform = `translateX(${posicao}px)`;
        }
    }
});

const heroTrilha = document.querySelector('.hero-track');
const heroOriginais = Array.from(document.querySelectorAll('.hero-bg'));
const heroTotal = heroOriginais.length;

heroTrilha.insertBefore(heroOriginais[heroTotal - 1].cloneNode(true), heroTrilha.firstChild);
heroTrilha.appendChild(heroOriginais[0].cloneNode(true));

let heroIndice = 1;
let heroTransicao = false;

function heroDefinirPos(animar) {
    heroTrilha.style.transition = animar ? 'transform 0.6s ease' : 'none';
    heroTrilha.style.transform = `translateX(-${heroIndice * 100}%)`;
}

heroDefinirPos(false);

function moverHero(dir) {
    if (heroTransicao) return;
    heroTransicao = true;
    heroIndice += dir;
    heroDefinirPos(true);
}

heroTrilha.addEventListener('transitionend', () => {
    if (heroIndice === 0) {
        heroIndice = heroTotal;
        heroDefinirPos(false);
    } else if (heroIndice === heroTotal + 1) {
        heroIndice = 1;
        heroDefinirPos(false);
    }
    heroTransicao = false;
});

let heroAuto = setInterval(() => moverHero(1), 6000);

function reiniciarAuto() {
    clearInterval(heroAuto);
    heroAuto = setInterval(() => moverHero(1), 6000);
}

document.querySelector('.hero-prev').addEventListener('click', () => { moverHero(-1); reiniciarAuto(); });
document.querySelector('.hero-next').addEventListener('click', () => { moverHero(1);  reiniciarAuto(); });