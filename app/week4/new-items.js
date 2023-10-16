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

    
}