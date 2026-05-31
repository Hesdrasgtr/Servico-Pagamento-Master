import assert from 'node:assert';
import { describe, it } from 'mocha';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js';

describe('Serviço de Pagamento', function () {

    it('Deve classificar pagamento como cara quando valor for maior que 100', function () {

        const servico = new ServicoDePagamento();

        servico.pagar(
            '0987-7656-3475',
            'Samar',
            156.87
        );

        const ultimoPagamento =
            servico.consultarUltimoPagamento();

        assert.equal(
            ultimoPagamento.categoria,
            'cara'
        );
    });

    it('Deve classificar pagamento como padrão quando valor for menor ou igual a 100', function () {

        const servico = new ServicoDePagamento();

        servico.pagar(
            '1111-2222-3333',
            'Neoenergia',
            99.99
        );

        const ultimoPagamento =
            servico.consultarUltimoPagamento();

        assert.equal(
            ultimoPagamento.categoria,
            'padrão'
        );
    });

    it('Deve retornar o último pagamento realizado', function () {

        const servico = new ServicoDePagamento();

        servico.pagar(
            '111',
            'Empresa A',
            50
        );

        servico.pagar(
            '222',
            'Empresa B',
            150
        );

        const ultimoPagamento =
            servico.consultarUltimoPagamento();

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

        assert.equal(
            ultimoPagamento.categoria,
            'cara'
        );
    });

});