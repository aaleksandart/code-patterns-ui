import { IDressModel } from "../../models/dressModel";

// SRP: Komponent som innehåller dress properties

// OCP: Komponenten kan utökas utan att modifieras eller sluta fungera.
// Vi kan alltså lägga till fler properties för en dress om vi så vill.

// LSP: Detta är en förlängning utav produkt modellen med composition
// istället för arv.

// ISP: Vi använder IDressProps för att få in rätt information.
// IDressProps använder i sin tur sig utav DressModel och dess
// interface IDressModel.

interface IDressProps {
    dress: IDressModel;
}

const dress = (props: IDressProps) => {
    const { dress } = props;
    const { dressType, dressLength } = dress;

    return (
        <>
            <li className="list-group-item"><strong>Dress type: </strong> {dressType}</li>
            <li className="list-group-item"><strong>Dress length: </strong> {dressLength}</li>
        </>
    )
}

export default dress