import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularDependenteEspecifico extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Listagem de um cliente relacionado a um dependente específico !!')
        this.numero = this.entrada.receberNumero('Digite o número de documento do dependente: ')

        this.clientes.map(client => {
            if(this.titular(client)) {
                client.Dependentes.map(dep => {
                    dep.Documentos.map(doc => {
                        if(parseInt(doc.Numero) == this.numero) {
                            let index = this.clientes.indexOf(client)
                            console.log('Titular referente: ')
                            this.impressor = new ImpressaorCliente(this.clientes[index])
                            console.log(this.impressor.imprimir())
                        }
                    })
                })
            } else {
                console.log("Titular não encontrado!")
            }
            })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}
