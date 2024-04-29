import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <br/>
            <Link href="/item/123">Item link</Link>
            <br/>
            <Link href="/test">Test link</Link>
        </div>
    );
}
