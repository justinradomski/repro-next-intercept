import Link from "next/link";
import {unstable_setRequestLocale} from "next-intl/server";

export default function TestPage() {

    unstable_setRequestLocale('en')
    return (
        <div>
            <h1>Test Page</h1>
            <p>No route interception</p>
            <Link href="/">Back</Link>
        </div>
    )
}