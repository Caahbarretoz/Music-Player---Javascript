const nomeMusica = document.getElementById("musica");
const audio = document.getElementById("audio-musica");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const nomeArtista = document.getElementById("artista")
const imagem = document.getElementById("capa")
var progressBar = document.getElementById('progressBar');

let playing = false;
let id = 2
var Artista = ""
var Musica = ""

function tocarFaixa() {
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  audio.play();
  playing = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  audio.pause();
  playing = false;
}

function tocarOuPausarFaixa() {
  if (playing === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximaMusica() {
    if (id === 1) {
        Artista = "Avril Lavigne";
        Musica = "Break It So Good";
        imagem.src = "./images/avril.jpg";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 2) {
        Artista = "Avril Lavigne";
        Musica = "Bright";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 3) {
        Artista = "Avril Lavigne";
        Musica = "C'est La Vie";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 4) {
        Artista = "Avril Lavigne";
        Musica = "Californyeah";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 5) {
        Artista = "Avril Lavigne";
        Musica = "Close";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 6) {
        Artista = "Avril Lavigne";
        Musica = "Don't Stop";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 7) {
        Artista = "Avril Lavigne";
        Musica = "Energy";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 8) {
        Artista = "Avril Lavigne";
        Musica = "Eternally";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 9) {
        Artista = "Avril Lavigne";
        Musica = "Half Full";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 10) {
        Artista = "Avril Lavigne";
        Musica = "Hallellujah";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 11) {
        Artista = "Avril Lavigne";
        Musica = "I Want What I Want";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 12) {
        Artista = "Avril Lavigne";
        Musica = "If I Said I Love You";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 13) {
        Artista = "Avril Lavigne";
        Musica = "In Touch";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 14) {
        Artista = "Avril Lavigne";
        Musica = "Joker";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 15) {
        Artista = "Avril Lavigne";
        Musica = "Let's Get Weird";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 16) {
        Artista = "Avril Lavigne";
        Musica = "Listen";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 17) {
        Artista = "Avril Lavigne";
        Musica = "Lucky Ones";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 18) {
        Artista = "Avril Lavigne";
        Musica = "Psychopath";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 19) {
        Artista = "Avril Lavigne";
        Musica = "Rock Boyfriend";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 20) {
        Artista = "Avril Lavigne";
        Musica = "Shut Up";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 21) {
        Artista = "Avril Lavigne";
        Musica = "Too Fast To Live";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 22) {
        Artista = "Tate Mcrae";
        Musica = "Not Talking";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/tate.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1A1A1A, #c0c0c0)';
        tocarFaixa();
        id += 1;
    }
    else if (id === 23) {
        Artista = "Taylor Swift";
        Musica = "You're Losing Me";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/taylor.jpg";
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1A1A1A, #161622, #000033, #11113f)';
        tocarFaixa();
        id = 1;
    }
}

function musicaAnterior() {
    if (id === 1) {
        Artista = "Avril Lavigne";
        Musica = "Break It So Good";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id = 23;
    }
    else if (id === 2) {
        Artista = "Avril Lavigne";
        Musica = "Bright";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 3) {
        Artista = "Avril Lavigne";
        Musica = "C'est La Vie";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 4) {
        Artista = "Avril Lavigne";
        Musica = "Californyeah";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 5) {
        Artista = "Avril Lavigne";
        Musica = "Close";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 6) {
        Artista = "Avril Lavigne";
        Musica = "Don't Stop";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 7) {
        Artista = "Avril Lavigne";
        Musica = "Energy";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 8) {
        Artista = "Avril Lavigne";
        Musica = "Eternally";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 9) {
        Artista = "Avril Lavigne";
        Musica = "Half Full";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 10) {
        Artista = "Avril Lavigne";
        Musica = "Hallellujah";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 11) {
        Artista = "Avril Lavigne";
        Musica = "I Want What I Want";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 12) {
        Artista = "Avril Lavigne";
        Musica = "If I Said I Love You";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 13) {
        Artista = "Avril Lavigne";
        Musica = "In Touch";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 14) {
        Artista = "Avril Lavigne";
        Musica = "Joker";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 15) {
        Artista = "Avril Lavigne";
        Musica = "Let's Get Weird";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 16) {
        Artista = "Avril Lavigne";
        Musica = "Listen";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 17) {
        Artista = "Avril Lavigne";
        Musica = "Lucky Ones";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 18) {
        Artista = "Avril Lavigne";
        Musica = "Psychopath";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 19) {
        Artista = "Avril Lavigne";
        Musica = "Rock Boyfriend";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 20) {
        Artista = "Avril Lavigne";
        Musica = "Shut Up";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 21) {
        Artista = "Avril Lavigne";
        Musica = "Too Fast To Live";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/avril.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1C1616,#330000, #660000, #912020)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 22) {
        Artista = "Tate Mcrae";
        Musica = "Not Talking";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/tate.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1A1A1A, #c0c0c0)';
        tocarFaixa();
        id -= 1;
    }
    else if (id === 23) {
        Artista = "Taylor Swift";
        Musica = "You're Losing Me";
        audio.src = "./Musicas/" + id + " " + Artista + " - " + Musica + ".mp3";
        imagem.src = "./images/taylor.jpg"
        nomeMusica.innerText = Musica;
        nomeArtista.innerText = Artista;
        document.body.style.backgroundImage = 'linear-gradient(#1A1A1A,#161622, #000033, #11113f)';
        tocarFaixa();
        id -= 1;
    }
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", musicaAnterior);
botaoProximoCapitulo.addEventListener("click", proximaMusica);
audio.addEventListener("ended", proximaMusica);
audio.addEventListener('timeupdate', function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

document.getElementById('progressContainer').addEventListener('click', function(event) {
    var percent = event.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
});
