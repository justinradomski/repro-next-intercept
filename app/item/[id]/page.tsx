import Link from "next/link";
import {unstable_setRequestLocale} from "next-intl/server";

export default function ItemPage({params: {id}}: { params: { id: string } }) {

    unstable_setRequestLocale('en')
    return (
        <div>
            <h1>Item Page</h1>
            <p>Param: {id}</p>
            <Link href="/">Back</Link>
        </div>
    )
}