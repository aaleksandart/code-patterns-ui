// SRP: Interface/modell för vad en dress ska innehålla.

// OCP: Då vi använder composition istället för arv 
// så har vi i själva produktkomponenten möjlighet 
// att lägga till fler properties utan att modifiera
// grund produkten.

// LSP: Precis som för OCP så använder vi oss av composition 
// och inte riktiga arv då detta är att föredra i React.

// ISP: Detta är en uttökning utav vår produkt utan att 
// egentligen ärva eftersom vi göra detta genom composition.

export interface IDressModel {
    dressType: String;
    dressLength: String;
}