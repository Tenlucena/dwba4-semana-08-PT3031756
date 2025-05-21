class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("Ana", "Silva", 8, 7),
  new Aluno("Bruno", "Souza", 5, 6),
  new Aluno("Carlos", "Oliveira", 9, 8)
];

function mostrarResultados(alunos) {
  alunos.forEach(aluno => {
    alert(
      `Nome: ${aluno.nomeCompleto()}\n` +
      `Média: ${aluno.media().toFixed(2)}\n` +
      `Situação: ${aluno.situacao()}`
    );
  });
}
// Executar a função
mostrarResultados(alunos);
