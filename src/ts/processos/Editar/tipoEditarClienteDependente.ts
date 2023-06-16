import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class EditarClienteDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let DocDependente = this.entrada.receberTexto("Número do documento do dependente para editar: ")
        this.clientes.forEach(cliente => {
            cliente.Dependentes.map(dep => {
                dep.Documentos.map(doc => {
                    if(doc.Numero == DocDependente){
                        let escolhaNome = this.entrada.receberTexto('Deseja editar o nome do dependente? s/n: ')
                        if(escolhaNome == 's'){
                            let novoNome = this.entrada.receberTexto('Digite o novo nome: ')
                            dep.Nome = novoNome
                        }
                        let escolhaNomeSocial = this.entrada.receberTexto('Deseja editar o nome social do dependente? s/n: ')
                        if(escolhaNomeSocial == 's'){
                            let novoNome = this.entrada.receberTexto('Digite o novo nome social: ')
                            dep.NomeSocial = novoNome
                        }
                    }
                })
            })
        })
    }
}