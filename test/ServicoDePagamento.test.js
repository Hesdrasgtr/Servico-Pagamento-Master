import assert from 'node:assert';
import { describe, it } from 'mocha';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js';

// Agrupa todos os testes relacionados ao serviço de pagamento
describe('Serviço de Pagamento', () => {

    // Teste para validar pagamentos acima de 100 reais
    it('Deve classificar pagamento como cara quando valor for maior que 100', () => {

        // Instancia o serviço de pagamento
        const servico = new ServicoDePagamento();

        // Realiza um pagamento acima de 100 reais
        servico.pagar(
            '0987-7656-3475',
            'Samar',
            156.87
        );

        // Consulta o último pagamento realizado
        const ultimoPagamento =
            servico.consultarUltimoPagamento();

        // Verifica se a categoria foi definida como "cara"
        assert.equal(
            ultimoPagamento.categoria,
            'cara'
        );
    });

    // Teste para validar pagamentos menores ou iguais a 100 reais
    it('Deve classificar pagamento como padrão quando valor for menor ou igual a 100', () => {

        // Instancia o serviço de pagamento
        const servico = new ServicoDePagamento();

        // Realiza um pagamento abaixo de 100 reais
        servico.pagar(
            '1111-2222-3333',
            'Neoenergia',
            99.99
        );

        // Consulta o último pagamento realizado
        const ultimoPagamento =
            servico.consultarUltimoPagamento();

        // Verifica se a categoria foi definida como "padrão"
        assert.equal(
            ultimoPagamento.categoria,
            'padrão'
        );
    });

    // Teste para garantir que apenas o último pagamento seja retornado
    it('Deve retornar o último pagamento realizado', () => {

        // Instancia o serviço de pagamento
        const servico = new ServicoDePagamento();

        // Primeiro pagamento
        servico.pagar(
            '111',
            'Empresa A',
            50
        );

        // Segundo pagamento
        servico.pagar(
            '222',
            'Empresa B',
            150
        );

        // Consulta o último pagamento da lista
        const ultimoPagamento =
            servico.consultarUltimoPagamento();

        // Verifica se os dados retornados pertencem ao segundo pagamento
        assert.equal(
            ultimoPagamento.codigoBarras,
            '222'
        );

        assert.equal(
            ultimoPagamento.empresa,
            'Empresa B'
        );

        assert.equal(
            ultimoPagamento.valor,
            150
        );

        // Verifica se a categoria foi definida corretamente
        assert.equal(
            ultimoPagamento.categoria,
            'cara'
        );
    });

});