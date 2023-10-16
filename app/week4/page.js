import NewItem from "./new-items";
import Link from 'next/link';

export default function Page(){
    return (
        <main>
            <NewItem/>

            <p className="flex justify-end bg-gray-500 text-black">
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}