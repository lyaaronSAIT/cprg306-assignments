"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import NewItem from './new-items';
import itemsData from './items.json'
import MealIdeas from './meal-ideas';
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

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
            <MealIdeas ingredients={selectedItemName}></MealIdeas>
            <p className="flex justify-end">
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}