import ItemList from "./item-list";
import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <h1>Shopping List</h1>
            <ItemList />
            <p>
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}