import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./Cliente/tipoCadastroCliente"
import TipoDeletarClientes from "./Cliente/tipoDeletarClientes"
import TipoEditarCliente from "./Cliente/tipoEditarCliente"
import TipoListagemClientes from "./Cliente/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoDeletarClientes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Tchau!')
                console.clear()
                break
            default:
                console.log('Opção não entendida !')
        }
    }
}