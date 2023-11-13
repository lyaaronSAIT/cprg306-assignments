"use client";
import { useState } from "react";
import Item from "./item.js";

export default function itemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort ((a, b) => {
        let aData = a[sortBy] || '';
        let bData = b[sortBy] || '';
        return aData.localeCompare(bData);
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="space-y-4"> Sort by:
                <button
                    className={`px-2 py-1 ${sortBy === 'name' ? 'bg-violet-700' : 'bg-violet-200 text-blue-800'}`}
                    onClick={() => setSortBy("name")}> Sort by Name
                </button>

                <button
                    className={`px-2 py-1 ${sortBy === 'category' ? 'bg-violet-500' : 'bg-violet-200 text-blue-800'}`}
                    onClick={() => setSortBy("category")}>Sort by Category
                </button>
                
                {sortedItems.map((item, index) => (
                    <Item
                        key = {index}
                        name = {item.name}
                        quantity = {item.quantity}
                        category = {item.category}
                    />
                ))}

            </div>
        </div>
    )
}