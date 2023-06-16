import Processo from "../../abstracoes/processo";
import ListagemTitulares from "../Titular/listagemTitulares";
import MenuTipoDeletarCliente from "../../menus/menuTipoDeleteCliente";
import DeletarTitulares from "../Titular/deletarTitulares";
import DeletarDependentes from "../Dependente/deletarDependentes";

export default class TipoDeletarClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDeletarCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new DeletarTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DeletarDependentes()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}