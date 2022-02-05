const database = require('../models')

class PessoaController {
    // Pega todos os registros de pessoas
    static async pegaTodasAsPessoas(req, res){
      try {
        const todasAsPessoas = await database.Pessoas.findAll()
        return res.status(200).json(todasAsPessoas)
          
      } catch (error) {
          return res.status(500).json(error.message)
      }
    }

    // Pega apenas um registro de pessoas
    static async pegaUmaPessoa(req, res){
     
      const { id } = req.params
      try {
        const umaPessoa = await database.Pessoas.findOne({
          where : { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umaPessoa)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Criar um registro  de pessoas
    static async criaPessoa(req, res){
      const novaPessoa = req.body
      try {
        const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
        return res.status(200).json(novaPessoaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Atualiza um registro de pessoas
    static async atualizaPessoa(req, res){
      const { id } = req.params
      const novasInfos = req.body
      try {
        await database.Pessoas.update(novasInfos, { where: {id: Number(id) }})
        const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
        res.status(200).json(pessoaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Deleta um registro de pessoas
    static async apagaPessoa(req, res){
      const { id } = req.params
      try {
        await database.Pessoas.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `O id ${id} foi deletado!` })
      } catch (error) {
        return res.status(500).json(error.message)        
      }
    }

    // Pega apenas uma matrícula
    static async pegaUmaMatricula(req, res){
     
      const { estudanteId, matriculaId } = req.params
      try {
        const umaMatricula = await database.Matriculas.findOne({
          where : { 
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }
        })
        return res.status(200).json(umaMatricula)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Criar uma matrícula
    static async criaMatricula(req, res){
      const { estudanteId } = req.params
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
      try {
        const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
        return res.status(200).json(novaMatriculaCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Atualiza uma matrícula
    static async atualizaMatricula(req, res){
      const { estudanteId, matriculaId } = req.params
      const novasInfos = req.body
      try {
        await database.Matriculas.update(novasInfos, { 
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
          }})
        const matriculaAtualizada = await database.Matriculas.findOne({
           where: { 
             id: Number(matriculaId)
            }})
        res.status(200).json(matriculaAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    // Deleta uma matrícula
    static async apagaMatricula(req, res){
      const { estudanteId, matriculaId } = req.params
      try {
        await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
        return res.status(200).json({ mensagem: `O id ${matriculaId} foi deletado!` })
      } catch (error) {
        return res.status(500).json(error.message)        
      }
    }

}

module.exports = PessoaController




