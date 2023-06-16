import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class EditarClienteTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        this.numero = this.entrada.receberNumero('Digite o número de documento do titular: ')

        this.clientes.map(cli => {
            if(this.titular(cli)) {
                cli.Documentos.map(doc => {
                    if(parseInt(doc.Numero) == this.numero) {
                        let index = this.clientes.indexOf(cli)

                        console.clear()
                        console.log('Cliente encontrado!')


                        console.log('Deseja editar o nome do cliente? [s/n]')
                        let escolha_nome = this.entrada.receberTexto('')
                        if(escolha_nome == 's') {
                            let receber_novo_nome = this.entrada.receberTexto('Digite um novo nome: ')
                            this.clientes[index].Nome = receber_novo_nome
                        }
                        
                        console.clear()
                        console.log('Deseja editar o nome social? [s/n]')
                        let escolha_nomesocial = this.entrada.receberTexto('')
                        if(escolha_nomesocial == 's') {
                            let receber_novo_nomesocial = this.entrada.receberTexto('Digite um novo nome social:')
                            this.clientes[index].NomeSocial = receber_novo_nomesocial
                        }

                        console.clear()
                        console.log('Deseja editar o telefone? [s/n]')
                        let escolha_telefone = this.entrada.receberTexto('')
                        if(escolha_telefone == 's') {
                            let telefone_pra_editar = this.entrada.receberNumero('Digite o telefone que deseja editar: ')
                            
                            cli.Telefones.map(t=> {
                                if(parseInt(t.Numero) == telefone_pra_editar) {
                                    let novo_ddd = this.entrada.receberTexto('Digite um novo DDD para esse telefone: ')
                                    let novo_tel = this.entrada.receberTexto('Digite um novo número para esse telefone: ')
                                    t.mudarDddTel(novo_ddd)
                                    t.mudarNumeroTel(novo_tel)
                                }
                            })
                        }

                        console.clear()
                        console.log('Deseja editar um documento? [s/n]')
                        let escolha_documento = this.entrada.receberTexto('')
                        if(escolha_documento == 's') {
                            let doc_pra_editar = this.entrada.receberNumero('Digite o número do documento que deseja editar: ')
                            
                            cli.Documentos.map(d => {
                                if(parseInt(d.Numero) == doc_pra_editar) {
                                    let novo_doc = this.entrada.receberTexto('Digite o novo número desse documento: ')
                                    d.mudarNumero(novo_doc)
                                }
                            })
                        }      

                    }
                })
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