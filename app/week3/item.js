export default function Item({name, quantity, category}) {
    return(
        <div>
            <div>
                <p>Item name: {name}</p>
                <p>Buy {quantity} of them in the {category} aisle.</p>
            </div>
        </div>
    );
}