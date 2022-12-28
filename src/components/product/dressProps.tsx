import { IDress } from "../../models/dressModel";

interface IDressProps {
    dress: IDress;
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