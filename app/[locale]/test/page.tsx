import Link from "next/link";

export default function TestPage() {

    return (
        <div>
            <h1>Test Page</h1>
            <p>No route interception</p>
            <Link href="/">Back</Link>
        </div>
    )
}