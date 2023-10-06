export default function Item({name, quantity, category}) {
    return(
        <div className="space-y-10">
            <div>
                <p className="flex justify-center font-bold text-violet-700">Item name: {name}</p>
                <p className="flex justify-center">Buy {quantity} of them in the {category} aisle.</p>
            </div>
        </div>
    );
}