export class ServicoDePagamento {

    constructor() {
        this.pagamentos = [];
    }
    // Teste Git
    // Método para realizar um pagamento
    pagar(codigoBarras, empresa, valor) {

        // Cria um objeto pagamento contendo:
        // código de barras, empresa, valor e categoria
        const pagamento = {
            codigoBarras,
            empresa,
            valor,

            // Se o valor for maior que 100,
            // a categoria será "cara"
            // caso contrário será "padrão"
            categoria: valor > 100 ? 'cara' : 'padrão'
        };

        // Adiciona o pagamento na lista de pagamentos
        this.pagamentos.push(pagamento);

        // Retorna o pagamento criado
        return pagamento;
    }

    // Método que retorna apenas o último pagamento realizado
    consultarUltimoPagamento() {

        // Retorna o último item do array de pagamentos
        return this.pagamentos[this.pagamentos.length - 1];
    }
}