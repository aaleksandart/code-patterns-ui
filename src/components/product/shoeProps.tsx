import { IShoeModel } from "../../models/shoeModel";

// SRP: Komponent som innehåller shoe properties

// OCP: Komponenten kan utökas utan att modifieras eller sluta fungera.
// Vi kan alltså lägga till fler properties för en shoe om vi så vill.

// LSP: Detta är en förlängning utav produkt modellen med composition
// istället för arv.

// ISP: Vi använder IShoeProps för att få in rätt information.
// IShoeProps använder i sin tur sig utav ShoeModel och dess
// interface IShoeModel.

interface IShoeProps {
    shoe: IShoeModel;
}

const shoe = (props: IShoeProps) => {
    const { shoe } = props;
    const { shoeType, shoeLaces, heels } = shoe;

    return (
        <>
            <li className="list-group-item"><strong>Shoe type: </strong> {shoeType}</li>
            <li className="list-group-item"><strong>Shoe laces: </strong> {shoeLaces !== false ? "Yes" : "No"}</li>
            <li className="list-group-item"><strong>Heels: </strong> {heels !== false ? "Yes" : "No"}</li>
        </>
    )
}

export default shoe