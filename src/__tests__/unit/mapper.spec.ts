import Mapper from '../../helpers/mapper.helper';
import {
    searchReturnDiferentCategoriesMock,
    searchReturnMock,
    itemReturnMock,
    descriptionMock,
    filtersResultMock,
    categoryReturnMock
} from './mock/search.mock';

describe('`Unit test to class ../../helpers/mapper.helper`', () => {
    test('Should return an array with keys name and lastname when authorMap() called.', async () => {
        expect.assertions(5);
        const authorMap = new Mapper().authorMap();

        expect(authorMap).toBeInstanceOf(Object);
        expect(authorMap).toHaveProperty('name');
        expect(authorMap).toHaveProperty('lastname');
        expect(authorMap).toMatchObject({
            name: 'João Pedro',
            lastname: 'Harbs'
        });
        expect(authorMap).toBeDefined();
    });

    test('Should return an parsed array with diferrent categories_ids when categoriesMap() called.', async () => {
        expect.assertions(4);
        const categoriesMap = new Mapper().categoriesMap(searchReturnDiferentCategoriesMock, filtersResultMock);

        expect(categoriesMap).toBeInstanceOf(Array);
        expect(categoriesMap).toHaveLength(3);
        expect(categoriesMap).toMatchObject([
            "Computación",
            "Laptops y Accesorios",
            "Notebooks",
        ]);
        expect(categoriesMap).toBeDefined();
    });

    test('Should return an parsed result with response of meli search when searchMap() called.', async () => {
        expect.assertions(8);
        const searchMap = new Mapper().searchMap(searchReturnMock, filtersResultMock);

        expect(searchMap).toBeInstanceOf(Object);
        expect(searchMap).toHaveProperty('author');
        expect(searchMap).toHaveProperty('author.name', 'João Pedro');
        expect(searchMap).toHaveProperty('author.lastname', 'Harbs');
        expect(searchMap).toHaveProperty('categories');
        expect(searchMap).toHaveProperty('items');
        expect(searchMap).toMatchObject({
            "author": {
              "name": "João Pedro",
              "lastname": "Harbs"
            },
            "categories": [
                "Computación",
                "Laptops y Accesorios",
                "Notebooks",
            ],
            "items": [
                {
                    "id": "MLA620399412",
                    "title": "Multimetro Digital Temperatura Capacidad Frecuencia 890g",
                    "price": {
                      "currency": "ARS",
                      "amount": "ARS 1,233.96"
                    },
                    "picture": "http://http2.mlstatic.com/D_819647-MLA31037059086_062019-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                },
                {
                    "id": "MLA603850410",
                    "title": "Multimetro Digital Compacto Con Buzzer T830d",
                    "price": {
                      "currency": "ARS",
                      "amount": "ARS 408.50"
                    },
                    "picture": "http://http2.mlstatic.com/D_613825-MLA31093217222_062019-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                },
            ]
        });
        expect(searchMap).toBeDefined();
    });

    test('Should return an parsed result with response of meli item when itemMap() called.', async () => {
        expect.assertions(17);
        const itemMap = new Mapper().itemMap(itemReturnMock, descriptionMock);

        expect(itemMap).toBeInstanceOf(Object);
        expect(itemMap).toHaveProperty('author');
        expect(itemMap).toHaveProperty('author.name', 'João Pedro');
        expect(itemMap).toHaveProperty('author.lastname', 'Harbs');
        expect(itemMap).toHaveProperty('item');
        expect(itemMap).toHaveProperty('item.id');
        expect(itemMap).toHaveProperty('item.title');
        expect(itemMap).toHaveProperty('item.price');
        expect(itemMap).toHaveProperty('item.price.currency');
        expect(itemMap).toHaveProperty('item.price.amount');
        expect(itemMap).toHaveProperty('item.picture');
        expect(itemMap).toHaveProperty('item.condition');
        expect(itemMap).toHaveProperty('item.free_shipping');
        expect(itemMap).toHaveProperty('item.sold_quantity');
        expect(itemMap).toHaveProperty('item.description');
        expect(itemMap).toMatchObject({
            "author": {
              "name": "João Pedro",
              "lastname": "Harbs"
            },
            "item": {
              "id": "MLA620399412",
              "title": "Multimetro Digital Temperatura Capacidad Frecuencia 890g",
              "category": {
                  "id": "MLA30810"
              },
              "price": {
                "currency": "ARS",
                "amount": "ARS 1,233.96"
              },
              "picture": "http://http2.mlstatic.com/D_819647-MLA31037059086_062019-O.jpg",
              "condition": "new",
              "free_shipping": false,
              "sold_quantity": 500,
              "description": "---------------------------------------------------------\nLOCALNUEVE\nMercadolider Platinium %100+\n---------------------------------------------------------\nMultimetro Digital DT890G\nCapacidad Frecuenc Temperatur\nMULTIMETRO DIGITAL DT890G\nCapacidad Frecuencia y Temperatura\nEconómico y versátil instrumento.\nIdeal para el servicio técnico, estudiantes.\nEspecificación:\nVoltaje AC: 200 2/20/200/750 V\nVoltaje DC: 0,2/2/20/200/1000 V\nRes frecuencia: 40-400Hz\nCorriente AC: 200mA y 20A\nResistancia: 200/2k/20k/200k/2Mo\nTemperatura: -20ºc - 400ºC / -4ºF - 752ºF\nCapacidad: 200p/20n/200n/2000n/20000nF\nFrecuencia: 20Khz\nGanancia Transistores: 0-1000\nImpedancia: 10MO\nDiodo check: cerca de 1.5 V\nContinuidad: menos de 50o\nCaracterísticas:\niec-61010, CAT II 600 v, protección de sobrecarga\n3 1/2 dígitos, máx. lectura 1999\nProtector de goma (holder): SI\nEnergía: 9 V (no incluida)\nACCESORIOS:\nCables de prueba, sonda de Temperatura, Manual de Usuario\n por fallas de fabricación..\nSomos mayoristas, si vas a compras cantidad consulta si podemos mejorar el precio. \n\n--------------------------------------------------------------\nRETIRA SIN COSTO\nPersonalmente en nuestro local.\nEstamos ubicados en el centro de la Ciudad de Buenos Aires.\nTribunales.\nPara llegar:\n• El subte “B” estación Uruguay\n• El subte “A” estación Saenz Peña\n• El subte “D” estación Tribunales\n• Lineas deColectivos: \n5, 6, 7, 9, 10, 12, 17, 23, 24, 26, 29, 37, 38, 39, 45, 50, 56, 59, 60, 64, 70, 75, 86, 90, 99, 100, 102, 105, 109, 115, 124, 140, 142, 150, 151, 155, 168\n\n--------------------------------------------------------------\nFACTURAS Realizamos facturas A y B.\n(Nuestra facturación es automática, editá correctamente tus datos al concretar la compra para una correcta facturación, caso contrario se emitirá Consumidor Final.)\n\n--------------------------------------------------------------\nHORARIOS:\n• De lunes a viernes: 10:00 hs a 18:00 Hs\n• Sábados y feriados: cerrado\n\n--------------------------------------------------------------\nFORMAS DE ENVÍO:\nEnvíos a todo el país:\n– MercadoEnvíos – \nSistema y servicio de MercadoLibre. Carga correctamente los datos de la encomienda ya que los mismos no pueden ser modificados y tené en cuenta las siguientes pautas:\n• Estándar y FULL a domicilio. Te lo entregara la empresa, el horario y el día que MercadoLibre determine.\n• Retiro en sucursal. Dentro de los 7 días hábiles a partir que MercadoLibre te notifique que se encuentra disponible.\n– Envios FLEX – \nEnvío en el día para CABA y alrededores comprando antes de las 13hs.\n• Te lo entregará una mensajería privada entre las 13 y las 20 horas (a determinar solo por la mensajería).\n• Comprando luego de las 13hs o requiriendo la entrega en una franja horaria mas acotada se podrá entregar al día siguiente.\n\n--------------------------------------------------------------\nFORMAS DE PAGO\n– MercadoPago – \n• Tarjeta de crédito o débito acreditación inmediata en hasta 12 Cuotas sin interés con tarjetas seleccionadas.\n• Efectivo generando un cupón de pago y luego dirigiéndote al centro de pago de tu preferencia.\n\n--------------------------------------------------------------\nSomos una empresa líder en la comercialización de herramientas, instrumentos y accesorios de la industria electrónica, con más de 20 años abasteciendo al gremio.\nMercadoLíder Platínum (La calificación más alta de Mercado Libre).\n100% de Calificaciones Positivas Avalan Nuestro Servicio.\n10 años en el sitio. Comprá con confianza y seguridad.\n\n--------------------------------------------------------------\nTienda on-line LOCALNUEVE\nMercadoLider Platinum 100%+\n\n--------------------------------------------------------------\n_-_-"
            }
          });
        expect(itemMap).toBeDefined();
    });

    test('Should return an parsed result of meli item when itemMap() called.', async () => {
        expect.assertions(13);
        const itemMap = new Mapper().mapItem(itemReturnMock, descriptionMock);

        expect(itemMap).toBeInstanceOf(Object);
        expect(itemMap).toHaveProperty('id');
        expect(itemMap).toHaveProperty('title');
        expect(itemMap).toHaveProperty('price');
        expect(itemMap).toHaveProperty('price.currency');
        expect(itemMap).toHaveProperty('price.amount');
        expect(itemMap).toHaveProperty('picture');
        expect(itemMap).toHaveProperty('condition');
        expect(itemMap).toHaveProperty('free_shipping');
        expect(itemMap).toHaveProperty('sold_quantity');
        expect(itemMap).toHaveProperty('description');
        expect(itemMap).toMatchObject({
            "id": "MLA620399412",
            "title": "Multimetro Digital Temperatura Capacidad Frecuencia 890g",
            "category": {
                "id": "MLA30810"
            },
            "price": {
              "currency": "ARS",
              "amount": "ARS 1,233.96"
            },
            "picture": "http://http2.mlstatic.com/D_819647-MLA31037059086_062019-O.jpg",
            "condition": "new",
            "free_shipping": false,
            "sold_quantity": 500,
            "description": "---------------------------------------------------------\nLOCALNUEVE\nMercadolider Platinium %100+\n---------------------------------------------------------\nMultimetro Digital DT890G\nCapacidad Frecuenc Temperatur\nMULTIMETRO DIGITAL DT890G\nCapacidad Frecuencia y Temperatura\nEconómico y versátil instrumento.\nIdeal para el servicio técnico, estudiantes.\nEspecificación:\nVoltaje AC: 200 2/20/200/750 V\nVoltaje DC: 0,2/2/20/200/1000 V\nRes frecuencia: 40-400Hz\nCorriente AC: 200mA y 20A\nResistancia: 200/2k/20k/200k/2Mo\nTemperatura: -20ºc - 400ºC / -4ºF - 752ºF\nCapacidad: 200p/20n/200n/2000n/20000nF\nFrecuencia: 20Khz\nGanancia Transistores: 0-1000\nImpedancia: 10MO\nDiodo check: cerca de 1.5 V\nContinuidad: menos de 50o\nCaracterísticas:\niec-61010, CAT II 600 v, protección de sobrecarga\n3 1/2 dígitos, máx. lectura 1999\nProtector de goma (holder): SI\nEnergía: 9 V (no incluida)\nACCESORIOS:\nCables de prueba, sonda de Temperatura, Manual de Usuario\n por fallas de fabricación..\nSomos mayoristas, si vas a compras cantidad consulta si podemos mejorar el precio. \n\n--------------------------------------------------------------\nRETIRA SIN COSTO\nPersonalmente en nuestro local.\nEstamos ubicados en el centro de la Ciudad de Buenos Aires.\nTribunales.\nPara llegar:\n• El subte “B” estación Uruguay\n• El subte “A” estación Saenz Peña\n• El subte “D” estación Tribunales\n• Lineas deColectivos: \n5, 6, 7, 9, 10, 12, 17, 23, 24, 26, 29, 37, 38, 39, 45, 50, 56, 59, 60, 64, 70, 75, 86, 90, 99, 100, 102, 105, 109, 115, 124, 140, 142, 150, 151, 155, 168\n\n--------------------------------------------------------------\nFACTURAS Realizamos facturas A y B.\n(Nuestra facturación es automática, editá correctamente tus datos al concretar la compra para una correcta facturación, caso contrario se emitirá Consumidor Final.)\n\n--------------------------------------------------------------\nHORARIOS:\n• De lunes a viernes: 10:00 hs a 18:00 Hs\n• Sábados y feriados: cerrado\n\n--------------------------------------------------------------\nFORMAS DE ENVÍO:\nEnvíos a todo el país:\n– MercadoEnvíos – \nSistema y servicio de MercadoLibre. Carga correctamente los datos de la encomienda ya que los mismos no pueden ser modificados y tené en cuenta las siguientes pautas:\n• Estándar y FULL a domicilio. Te lo entregara la empresa, el horario y el día que MercadoLibre determine.\n• Retiro en sucursal. Dentro de los 7 días hábiles a partir que MercadoLibre te notifique que se encuentra disponible.\n– Envios FLEX – \nEnvío en el día para CABA y alrededores comprando antes de las 13hs.\n• Te lo entregará una mensajería privada entre las 13 y las 20 horas (a determinar solo por la mensajería).\n• Comprando luego de las 13hs o requiriendo la entrega en una franja horaria mas acotada se podrá entregar al día siguiente.\n\n--------------------------------------------------------------\nFORMAS DE PAGO\n– MercadoPago – \n• Tarjeta de crédito o débito acreditación inmediata en hasta 12 Cuotas sin interés con tarjetas seleccionadas.\n• Efectivo generando un cupón de pago y luego dirigiéndote al centro de pago de tu preferencia.\n\n--------------------------------------------------------------\nSomos una empresa líder en la comercialización de herramientas, instrumentos y accesorios de la industria electrónica, con más de 20 años abasteciendo al gremio.\nMercadoLíder Platínum (La calificación más alta de Mercado Libre).\n100% de Calificaciones Positivas Avalan Nuestro Servicio.\n10 años en el sitio. Comprá con confianza y seguridad.\n\n--------------------------------------------------------------\nTienda on-line LOCALNUEVE\nMercadoLider Platinum 100%+\n\n--------------------------------------------------------------\n_-_-"
        });
        expect(itemMap).toBeDefined();
    });

    test('Should return an parsed result of meli search when itemsMap() called.', async () => {
        expect.assertions(4);
        const itemsMap = new Mapper().itemsMap(searchReturnMock);

        expect(itemsMap).toBeInstanceOf(Object);
        expect(itemsMap).toHaveLength(2);
        expect(itemsMap).toMatchObject([
            {
                "id": "MLA620399412",
                "title": "Multimetro Digital Temperatura Capacidad Frecuencia 890g",
                "price": {
                    "currency": "ARS",
                    "amount": "ARS 1,233.96"
                },
                "picture": "http://http2.mlstatic.com/D_819647-MLA31037059086_062019-I.jpg",
                "condition": "new",
                "free_shipping": false
                },
                {
                "id": "MLA603850410",
                "title": "Multimetro Digital Compacto Con Buzzer T830d",
                "price": {
                    "currency": "ARS",
                    "amount": "ARS 408.50"
                },
                "picture": "http://http2.mlstatic.com/D_613825-MLA31093217222_062019-I.jpg",
                "condition": "new",
                "free_shipping": false
                },
        ]);
        expect(itemsMap).toBeDefined();
    });

    test('Should return an parsed result of meli category by category_id when categoryMap() called.', async () => {
        expect.assertions(7);
        const itemsMap = new Mapper().categoryMap(categoryReturnMock);

        expect(itemsMap).toBeInstanceOf(Object);
        expect(itemsMap.nested_categories).toHaveLength(5);
        expect(itemsMap).toHaveProperty('id');
        expect(itemsMap).toHaveProperty('name');
        expect(itemsMap).toHaveProperty('nested_categories');
        expect(itemsMap).toMatchObject({
            "id": "MLA30810",
            "name": "Multímetros",
            "nested_categories": [
              "Herramientas y Construcción",
              "Herramientas",
              "Testers y Equipos de Medición",
              "Medidores de Electricidad",
              "Multímetros"
            ]
        });
        expect(itemsMap).toBeDefined();
    });
});
