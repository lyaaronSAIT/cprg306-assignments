"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import NewItem from './new-items';
import itemsData from './items.json'
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => {
            return[...prevItems, newItem];
        });
    }

    return (
        <main>
            <h1 className = "flex justify-center text-5xl font-bold m-3 text-violet-700">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList items={items}/>
            <p className="flex justify-end">
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}