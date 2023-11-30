"use client";
import ItemList from "./item-list";
import { useUserAuth } from "../_utils/auth-context";
import Link from 'next/link';
import NewItem from './new-items';
import MealIdeas from './meal-ideas';
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    useEffect(() => {
        loadItems();
    }, []);
    
    async function loadItems() {
        try {
            if (user) {
            const items = await getItems(user.uid);
            setItems(items);
            }
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    if (!user) {
        return (
            <div>
                <p className="p-4">You are not logged in. Please log in to view the shopping list.</p>
                <a className="text-white bg-violet-600 p-2 rounded-lg m-4" href="../week8">Go to Landing Page</a>
            </div>
        );
    }

    function handleAddItem(newItem) {
        addItem(user.uid, newItem)
        .then((itemId) => {
          const updatedItem = { ...newItem, id: itemId };
          setItems((prevItems) => [...prevItems, updatedItem]);
        })
        .catch((error) => {
          console.error("Error adding item:", error);
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