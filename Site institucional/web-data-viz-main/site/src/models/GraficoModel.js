var database = require("../database/config")

function listar() {
    var instrucao = `
    SELECT COUNT(idQuiz) AS quantidade, personagem FROM quiz GROUP BY personagem;
    `;
    return database.executar(instrucao);
}


module.exports = {
    listar
};