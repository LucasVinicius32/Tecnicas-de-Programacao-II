import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";


export default class CadastroHospedagem extends Processo {

    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    private clientes: Cliente []

    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.execucao = true
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        console.log('Cadastrando uma Hospedagem ! ')

        let documento = this.entrada.receberTexto('número do documento do cliente a ser registrado como resposável da hospedagem? ')
        
        console.clear()

        console.log('1- Acomodação simples para solteiro(a)') 
        console.log('2- Acomodação simples para casal') 
        console.log('3- Acomodação para família com até duas crianças')
        console.log('4- Acomodação para família com até cinco crianças')
        console.log('5- Acomodação com garagem para solteiro(a)')
        console.log('6- Acomodação para até duas familias, casal e três crianças cada')

        let index: number = 0;
        this.clientes.map(cli=> {
            cli.Documentos.map(doc => {
                if(doc.Numero === documento) {
                  index = this.clientes.indexOf(cli) 
                }
            })
        })

        this.opcao = this.entrada.receberNumero('Qual o tipo de quarto deseja registrar?')

        switch(this.opcao) {
            case 1: 
                let acomodacao1 = new Acomodacao(
                    this.acomodacoes[4].NomeAcomadacao, 
                    this.acomodacoes[4].CamaSolteiro, 
                    this.acomodacoes[4].CamaCasal, 
                    this.acomodacoes[4].Suite, 
                    this.acomodacoes[4].Climatizacao, 
                    this.acomodacoes[4].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao1
                break
            
            case 2:
                let acomodacao2 = new Acomodacao(
                    this.acomodacoes[0].NomeAcomadacao, 
                    this.acomodacoes[0].CamaSolteiro, 
                    this.acomodacoes[0].CamaCasal, 
                    this.acomodacoes[0].Suite, 
                    this.acomodacoes[0].Climatizacao, 
                    this.acomodacoes[0].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao2
                break


            case 3:
                let acomodacao3 = new Acomodacao(
                    this.acomodacoes[1].NomeAcomadacao, 
                    this.acomodacoes[1].CamaSolteiro, 
                    this.acomodacoes[1].CamaCasal, 
                    this.acomodacoes[1].Suite, 
                    this.acomodacoes[1].Climatizacao, 
                    this.acomodacoes[1].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao3
                break

            case 4:
                let acomodacao4 = new Acomodacao(
                    this.acomodacoes[2].NomeAcomadacao, 
                    this.acomodacoes[2].CamaSolteiro, 
                    this.acomodacoes[2].CamaCasal, 
                    this.acomodacoes[2].Suite, 
                    this.acomodacoes[2].Climatizacao, 
                    this.acomodacoes[2].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao4
                break

            case 5:
                let acomodacao5 = new Acomodacao(
                    this.acomodacoes[5].NomeAcomadacao, 
                    this.acomodacoes[5].CamaSolteiro, 
                    this.acomodacoes[5].CamaCasal, 
                    this.acomodacoes[5].Suite, 
                    this.acomodacoes[5].Climatizacao, 
                    this.acomodacoes[5].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao5
                break
            
            case 6:
                let acomodacao6 = new Acomodacao(
                    this.acomodacoes[3].NomeAcomadacao, 
                    this.acomodacoes[3].CamaSolteiro, 
                    this.acomodacoes[3].CamaCasal, 
                    this.acomodacoes[3].Suite, 
                    this.acomodacoes[3].Climatizacao, 
                    this.acomodacoes[3].Garagem
                )
                this.clientes[index].Acomodacoes = acomodacao6
                break
        } 
        



        console.log(this.clientes[index].Acomodacoes)
    }
}