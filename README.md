# Mercado Libre Challenge (Middle-End)

## Intro

Challenge proposed by Mercado Libre in a selection process for a vacancy in Front-end Developer that consists of developing a middle-end application, with the requirements:

- Node >= 6.

- Express.

- Build the following endpoint to be used from the views.
  - `/api/items?q=:query`
    - This endpoint is reponsible for search in meli api on `https://api.mercadolibre.com/sites/MLA/search?q=:query` and return the results in the indicated format:.
```json
{
 “author”: {
 “name”: String
 “lastname”: String
 },
 categories: [String, String, String, ...],
 items: [
 {
 "id": String,
 "title": String,
 "price": {
 "currency": String,
 "amount": Number,
 "decimals": Number
 },
 “picture”: String,
 "condition": String,
 "free_shipping": Boolean
 },
 {...},
 {...},
 {...}
 ]
}
```

- Build the following endpoint to be used from the views.
  - `/api/items/:id`
    - This endpoint is reponsible for get an item in meli api on `https://api.mercadolibre.com/items/:id` and `https://api.mercadolibre.com/items/:id/description` returning the results in the indicated format:.
```json
{
 “author”: {
 “name”: String
 “lastname”: String
 },
 “item”: {
 "id": String,
 "title": String,
 "price": {
 "currency": String,
 "amount": Number,
 "decimals": Number,
 },
 “picture”: String,
 "condition": String,
 "free_shipping": Boolean,
 "sold_quantity", Number
 "description": String
 }
}
```
-   Use GitHub to host the code.


First of all, I would like to thank you for the opportunity to be able to take the test and have the opportunity to join a company as innovative and leader in the segment as Mercado Libre.

## Project Behavior

-   **API REST**

    For the exhibition of the routes in the REST model with JSON format I used the Express micro-framework.

-   **TESTS**

    To perform unit and integration tests, the JEST and Supertest were used. I could also have used the Mocha and Chai.

-   **OTHERS**

    I used some libs for formatting, indenting and standardizing code.

# End-points

### Sarch Item

| resource             | description                            |
| :------------------- | :------------------------------------- |
| `/api/items?q=:query` **GET** | Get items in Meli API and return data parsed. |

`/api/items?q=:query` **GET** - QUERY PARAMS

```shell
{
	"q": "Bola Cuadrada", -> required
	"limit": "123456" -> unrequired (default 4)
}
```

`/api/items?q=:query` **POST** - 422 UNPROCESSABLE ENTITY RESPONSE

```shell
{
	"errors": [
    	{
        	"msg": "Invalid value",
            "param": "q",
            "location": "query"
        }
    ]
}
```

`/api/items?q=:query` **POST** - 200 OK RESPONSE

```shell
{
	"author": {
		"name": "João Pedro",
		"lastname": "Harbs"
	},
	"categories": [
		"MLA1652"
	],
	"items": [
		{
			"id": "MLA896864876",
			"title": "Apple Macbook Air 2020 13.3 Core I3 8gb 256gb A2179 1,29kg",
			"price": {
				"currency": "ARS",
				"amount": "ARS 155,599.00"
			},
			"picture": "http://http2.mlstatic.com/D_738237-MLA44060063201_112020-O.jpg",
			"condition": "new",
			"free_shipping": "true",
            "state": "Entre Ríos"
		},
		{
			"id": "MLA899835631",
			"title": "Macbook Air Core I3 10ma Gen 8gb Ram Ssd 256gb Retina 2020 ",
			"price": {
				"currency": "ARS",
				"amount": "ARS 152,899.00"
			},
			"picture": "http://http2.mlstatic.com/D_703565-MLA44240104856_122020-O.jpg",
			"condition": "new",
			"free_shipping": "true",
            "state": "Entre Ríos"
		}
	]
}
```

### Get Item

| resource             | description                            |
| :------------------- | :------------------------------------- |
| `/api/items/:id` **GET** | Get specific item in Meli API and return data parsed. |

`/api/items?q=:query` **POST** - 422 UNPROCESSABLE ENTITY RESPONSE

```shell
{
	"errors": [
    	{
        	"msg": "Invalid value",
            "param": "q",
            "location": "query"
        }
    ]
}
```

`/api/items/:id` **GET** - 404 NOT FOUND RESPONSE IF NOT EXISTS ITEM

```shell
{
	"message": "Item with id MLA620399412 not found",
	"error": "not_found",
	"status": 404,
	"cause": []
}
```

`/api/items/:id` **GET** - 404 NOT FOUND RESPONSE IF NOT EXISTS RESOURCE

```shell
{
	"statusCode": 404,
	"message": "Meli API error!",
	"error": {
		"error": "resource not found",
		"message": "Si quieres conocer los recursos de la API que se encuentran disponibles visita el Sitio de Desarrolladores de MercadoLibre (http://developers.mercadolibre.com)"
	}
}
```

`/api/items/:id` **GET** - 200 OK RESPONSE

```shell
{
  "author": {
    "name": "João Pedro",
    "lastname": "Harbs"
  },
  "item": {
    "id": "MLA620399412",
    "title": "Multimetro Digital Temperatura Capacidad Frecuencia 890g",
    "price": {
      "currency": "ARS",
      "amount": "ARS 1,233.96"
    },
    "picture": "http://http2.mlstatic.com/D_819647-MLA31037059086_062019-I.jpg",
    "condition": "new",
    "free_shipping": false,
    "sold_quantity": 500,
    "description": "---------------------------------------------------------\nLOCALNUEVE\nMercadolider Platinium %100+\n---------------------------------------------------------\nMultimetro Digital DT890G\nCapacidad Frecuenc Temperatur\nMULTIMETRO DIGITAL DT890G\nCapacidad Frecuencia y Temperatura\nEconómico y versátil instrumento.\nIdeal para el servicio técnico, estudiantes.\nEspecificación:\nVoltaje AC: 200 2/20/200/750 V\nVoltaje DC: 0,2/2/20/200/1000 V\nRes frecuencia: 40-400Hz\nCorriente AC: 200mA y 20A\nResistancia: 200/2k/20k/200k/2Mo\nTemperatura: -20ºc - 400ºC / -4ºF - 752ºF\nCapacidad: 200p/20n/200n/2000n/20000nF\nFrecuencia: 20Khz\nGanancia Transistores: 0-1000\nImpedancia: 10MO\nDiodo check: cerca de 1.5 V\nContinuidad: menos de 50o\nCaracterísticas:\niec-61010, CAT II 600 v, protección de sobrecarga\n3 1/2 dígitos, máx. lectura 1999\nProtector de goma (holder): SI\nEnergía: 9 V (no incluida)\nACCESORIOS:\nCables de prueba, sonda de Temperatura, Manual de Usuario\n por fallas de fabricación..\nSomos mayoristas, si vas a compras cantidad consulta si podemos mejorar el precio. \n\n--------------------------------------------------------------\nRETIRA SIN COSTO\nPersonalmente en nuestro local.\nEstamos ubicados en el centro de la Ciudad de Buenos Aires.\nTribunales.\nPara llegar:\n• El subte “B” estación Uruguay\n• El subte “A” estación Saenz Peña\n• El subte “D” estación Tribunales\n• Lineas deColectivos: \n5, 6, 7, 9, 10, 12, 17, 23, 24, 26, 29, 37, 38, 39, 45, 50, 56, 59, 60, 64, 70, 75, 86, 90, 99, 100, 102, 105, 109, 115, 124, 140, 142, 150, 151, 155, 168\n\n--------------------------------------------------------------\nFACTURAS Realizamos facturas A y B.\n(Nuestra facturación es automática, editá correctamente tus datos al concretar la compra para una correcta facturación, caso contrario se emitirá Consumidor Final.)\n\n--------------------------------------------------------------\nHORARIOS:\n• De lunes a viernes: 10:00 hs a 18:00 Hs\n• Sábados y feriados: cerrado\n\n--------------------------------------------------------------\nFORMAS DE ENVÍO:\nEnvíos a todo el país:\n– MercadoEnvíos – \nSistema y servicio de MercadoLibre. Carga correctamente los datos de la encomienda ya que los mismos no pueden ser modificados y tené en cuenta las siguientes pautas:\n• Estándar y FULL a domicilio. Te lo entregara la empresa, el horario y el día que MercadoLibre determine.\n• Retiro en sucursal. Dentro de los 7 días hábiles a partir que MercadoLibre te notifique que se encuentra disponible.\n– Envios FLEX – \nEnvío en el día para CABA y alrededores comprando antes de las 13hs.\n• Te lo entregará una mensajería privada entre las 13 y las 20 horas (a determinar solo por la mensajería).\n• Comprando luego de las 13hs o requiriendo la entrega en una franja horaria mas acotada se podrá entregar al día siguiente.\n\n--------------------------------------------------------------\nFORMAS DE PAGO\n– MercadoPago – \n• Tarjeta de crédito o débito acreditación inmediata en hasta 12 Cuotas sin interés con tarjetas seleccionadas.\n• Efectivo generando un cupón de pago y luego dirigiéndote al centro de pago de tu preferencia.\n\n--------------------------------------------------------------\nSomos una empresa líder en la comercialización de herramientas, instrumentos y accesorios de la industria electrónica, con más de 20 años abasteciendo al gremio.\nMercadoLíder Platínum (La calificación más alta de Mercado Libre).\n100% de Calificaciones Positivas Avalan Nuestro Servicio.\n10 años en el sitio. Comprá con confianza y seguridad.\n\n--------------------------------------------------------------\nTienda on-line LOCALNUEVE\nMercadoLider Platinum 100%+\n\n--------------------------------------------------------------\n_-_-"
  }
}
```

## Installation

### Prerequisites

To run the application it is necessary to have installed Node in version v12.13.0 or higher and Yarn in version 1.22.10.

### Phases

To run the application on your machine, follow these steps:

1. git clone [https://github.com/devbarba/meli_middleend_challenge.git](https://github.com/devbarba/meli_middleend_challenge.git)

2. cd meli_middleend_challenge `Access the project folder`

3. yarn install `Performs installation of dependencies`

4. yarn start or yarn dev:server `Run the application`

5. Access: `http://0.0.0.0:3000` If you present a welcome message everything went well.

## Tests

To run the tests run the following command:
`yarn test`

## Author

[Harbs](https://github.com/devbarba)
