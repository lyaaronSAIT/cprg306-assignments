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

    function handleItemSelect(item) {
        const cleanedItemName = item.name.trim().toLowerCase();
        setSelectedItemName(cleanedItemName);
    }

    return (
        <main>
            <h1 className = "flex justify-center text-5xl font-bold m-3 text-violet-700">Shopping List</h1>
            <div className="flex">
                <div className="w-full sm:w-1/2 p-4">
                    <NewItem onAddItem={handleAddItem}></NewItem>
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-full sm:w-1/2 p-4">
                    <MealIdeas ingredients={selectedItemName}></MealIdeas>
                </div>
            </div>
            <p className="flex justify-end">
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}