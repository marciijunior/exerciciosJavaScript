var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
  nome: "Matheus",
  idade: 29,
  falar: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
  dizerNome: function () {
    console.log(
      "O meu nome eu não sei, mas minha idade é " + this.idade + " anos"
    );
  },
  aniversario: function () {
    this.idade++;
  },
  saudacao: function () {
    return "Sr. " + this.nome;
  },
};

pessoa.dizerNome();
pessoa.falar();
pessoa.aniversario();
pessoa.dizerNome();
console.log(pessoa.saudacao());
