export default function Item({name, quantity, category, onSelect}) {
    return(
        <div className="space-y-10">
            <liv onClick={ onSelect }>
                <ul>
                    <li className="p-2 m-4 max-w-sm bg-slate-900">
                        <p className="flex justify-center font-bold text-violet-700">Item name: {name}</p>
                        <p className="flex justify-center">Buy {quantity} of them in the {category} aisle.</p>
                    </li>
                </ul>
            </liv>
        </div>
    );
}