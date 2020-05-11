function helloWorld() {

    var name = "Paulo Corazza";
    var job = "Programador";

    Swal.fire({
      title: 'Olá, obrigado por estar visitando a minha página !',
      text: 'Eu sou o ' + name + ' e sou um ' + job,
      type: 'info',
      confirmButtonText: 'Agora vou deixar você me conhecer um pouco mais !'
    })
}
const app = new Vue({

el: '#app',
data: {

  player1: '',
  player2: '',
  lifePlayer1: 20,
  lifePlayer2: 20,

},

methods: {

  reduceCounter1() {

    this.lifePlayer1--
    if (this.lifePlayer1 == 0) {

      Swal.fire({
          text: 'O jogador ' + this.player1 + ' perdeu !',
          type: 'danger',
          imageUrl: './img/game over.png',
          imageWidth: 250,
          imageHeight: 250,
          confirmButtonText: 'Voltar'
        },
        this.lifePlayer1 = 20)

    }
  },
  addCounter1() {

    this.lifePlayer1++

  },
  reduceCounter2() {

    this.lifePlayer2--

    if (this.lifePlayer2 == 0) {

      Swal.fire({
          text: 'O jogador ' + this.player2 + ' perdeu !',
          type: 'danger',
          imageUrl: './img/game over.png',
          imageWidth: 250,
          imageHeight: 250,
          confirmButtonText: 'Voltar'
        },
        this.lifePlayer2 = 20)

    }
  },
  addCounter2() {

    this.lifePlayer2++

  },
  showModal() {
    $('#modal').modal('show');
  },
},

})
$("#contactForm").validate();