import config from "../configs/environment.config";

export const moneyFormat = (value: number) => {
    return value.toLocaleString('pt-br',{minimumFractionDigits: 2, style: 'currency', currency: config.apis.meli.region == 'MLA' ? 'ARS' : 'BRL' });
};

