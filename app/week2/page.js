import StudentInfo from "../StudentInfo";
import Link from 'next/link';

export default function Shoppinglist() {
    return (
        <main>
            <h1>My Shopping List</h1>
            <StudentInfo></StudentInfo>
            <p>
                <Link href = '/'>Homepage</Link>
            </p>
        </main>
    );
}