import config from "../../configs/environment.config";
import { moneyFormat } from "../../utils/other.util";

describe('`Unit test to class ../../utils/other.util`', () => {
    test('Should return parsed currency value when moneyFormat() called.', async () => {
        expect.assertions(2);

        const unformatedNumber = 135.5;
        const formatedNumber = moneyFormat(unformatedNumber);
        expect(formatedNumber).toEqual(`${config.apis.meli.region === 'MLA' ? 'ARS' : 'BRL' } 135.50`);
        expect(formatedNumber).toBeDefined();
    });
});
