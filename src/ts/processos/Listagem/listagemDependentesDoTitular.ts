import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesDoTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let titular = this.entrada.receberTexto("Número de documento do titular: ")
        console.log('Listagem dos clientes dependentes: ')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                cliente.Documentos.map(doc => {
                    if(doc.Numero == titular) {
                        let index = this.clientes.indexOf(cliente)
                        this.clientes[index].Dependentes.map(d => {
                            this.impressor = new ImpressaorCliente(d)
                            console.log(this.impressor.imprimir())
                        })
                    }
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