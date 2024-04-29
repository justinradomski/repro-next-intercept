import Link from "next/link";

export default function ItemPage({params: {id}}: { params: { id: string } }) {

    return (
        <div>
            <h1>Item Page</h1>
            <p>Param: {id}</p>
            <Link href="/">Back</Link>
        </div>
    )
}