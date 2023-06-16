import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class DeletarDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        this.numero = this.entrada.receberNumero('Número do documento do dependente que deseja excluir: ')
        this.clientes.forEach(cliente => {
            
            cliente.Dependentes.map(dependente => {
                dependente.Documentos.map(doc => {
                    if(parseInt(doc.Numero) == this.numero) {
                        let index = this.clientes.indexOf(dependente)
                        cliente.Dependentes.splice(index, 1)
                    }
                })
            })
 
            cliente.Documentos.map(item => {
                if(parseInt(item.Numero) == this.numero) {
                    let index = this.clientes.indexOf(cliente)
                    this.clientes.splice(index, 1)

                }
            })
        })

        
    }
}
