// SRP: Interface/grund modell för vad en produkt ska innehålla.

// OCP: Då vi använder composition istället för arv 
// så har vi i själva produktkomponenten möjlighet 
// att lägga till fler properties utan att modifiera
// grund produkten.

// LSP: Precis som för OCP så använder vi oss av composition 
// och inte riktiga arv då detta är att föredra i React.

export interface IProductModel {
    id: number;
    productType: String;
    name: String;
    description: String;
    barcode: String;
    price: number;
    color: String;
}