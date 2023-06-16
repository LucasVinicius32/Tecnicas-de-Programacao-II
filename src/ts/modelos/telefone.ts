export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }
    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }


    public mudarDddTel(novo_ddd:string) {
        return this.numero = novo_ddd
        
    }

    public mudarNumeroTel(novo_num:string) {
        return this.numero = novo_num
        
    }
}