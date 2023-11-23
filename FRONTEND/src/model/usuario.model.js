class Usuario {
  constructor(nome, idade, login, senha) {
    this.nome = nome;
    this.idade = idade;
    this.login = login;
    this.senha = senha;
  }
  setNome(nome) {
    this.nome = nome;
  }
  getNome() {
    return this.nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }
  getIdade() {
    return this.idade;
  }
  setLogin(login) {
    this.login = login;
  }
  getLogin() {
    return this.login;
  }
  setSenha(senha) {
    this.senha = senha;
  }
  getSenha() {
    return this.senha;
  }
}
export { Usuario };
