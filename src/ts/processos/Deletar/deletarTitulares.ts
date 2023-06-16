import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class DeletarTitulares extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        
        this.numero = this.entrada.receberNumero('Número do documento do titular que deseja excluir: ')
        this.clientes.forEach(cliente => {
 
            cliente.Documentos.map(item => {
                if(parseInt(item.Numero) == this.numero) {
                    let index = this.clientes.indexOf(cliente)
                    this.clientes.splice(index, 1)

                }
            })
        })


    }
}
