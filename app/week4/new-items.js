"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the form's default submission behavior

        const item = { // new item object
            name,
            quantity,
            category
        };

        console.log(newItem); // log the item object to the console

        alert('Item name: "${name}", quantity: "${quantity}", category: ${category}.'); // display info

        setName("");
        setQuantity(1);
        setCategory("Produce");

    };

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const quantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const categoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
                <div>
                <h1>Add New Item</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Item Name </span>
                            <input 
                                required onChange={nameChange}
                                value={name}
                            ></input>
                        </label>

                        <label>
                            <span> Quantity </span>
                            <select
                                required onChange={quantityChange}
                                value={quantity}
                                type="number"
                                min={1}
                                max={99}
                            ></select>
                        </label>

                        <label>
                            <span> Category </span>
                            <select 
                                required onChange={categoryChange}
                                value={category}>

                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <button type="submit">
                             Submit Item 
                        </button>
                    </form>
                </div>
            
        </main>
    );
}