//1
class Pessoa{
    setnome(nome){
    this.nome = nome
    }
    
    getnome(){
    return this.nome
    }

    setendereco(endereco){
    this.endereco = endereco
    }
        
    getendereco(){
    return this.endereco
    }

    settelefone(telefone){
    this.telefone = telefone
    }
            
    gettelefone(){
    return this.telefone
    }
}

//2
class Fornecedor extends Pessoa{
constructor(valorCredito, valorDivida, empresa,){
super();

this.valorCredito = valorCredito;
this.valorDivida = valorDivida;
this.empresa = empresa;
}

obterSaldo(){
try{
    return this.valorCredito - this.valorDivida;
    } catch(erro){
    return erro.informar();
    }
  }

informar(){
if (this.valorCredito > 0){
    return obterSaldo()
} else{
    throw new Error("Valor Negativo: O valor do atributo não pode ser menor que zero.")
    }
  }
}

let fornecedor = new Fornecedor(-50, 50, "Rodrigo Rodas");
console.log(fornecedor.obterSaldo());
console.log(fornecedor.informar());