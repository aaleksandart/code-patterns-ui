import { IShoe } from "../../models/shoeModel";

export interface IShoeProps {
    shoe: IShoe;
}

const shoe = (props: IShoeProps) => {
    const { shoe } = props;
    const { shoeType, shoeLaces, heels } = shoe;

    return (
        <>
            <li className="list-group-item"><strong>Shoe type: </strong> {shoeType}</li>
            <li className="list-group-item"><strong>Shoe laces: </strong> {shoeLaces != false ? "Yes" : "No"}</li>
            <li className="list-group-item"><strong>Heels: </strong> {heels != false ? "Yes" : "No"}</li>
        </>
    )
}

export default shoe