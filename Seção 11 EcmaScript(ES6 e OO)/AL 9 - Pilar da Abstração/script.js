class ContaBancaria{
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
}
depositar(valorDesposito){
    this.saldo += valorDesposito
}
sacar(valorSaque){
    this.saldo -= valorSaque
}
consultarSaldo(valorSaldo){
    return this.saldo
}
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log('Saldo da conta: '+ x.consultarSaldo());
x.depositar(450)
console.log('Saldo da conta: '+ x.consultarSaldo());
x.sacar(200)
console.log('Saldo da conta: '+ x.consultarSaldo());

console.log('Saldo da conta 2: '+ y.consultarSaldo());