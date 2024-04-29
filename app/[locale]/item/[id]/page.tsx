import Link from "next/link";
import {unstable_setRequestLocale} from "next-intl/server";

export default function ItemPage({params: {id, locale}}: { params: { id: string, locale: string } }) {
    //Needed for static rendering
    //Docs on https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
    //Needs to be used before any other intl hook otherwise it will cause the build to fail
    unstable_setRequestLocale(locale)

    return (
        <div>
            <h1>Item Page</h1>
            <p>Param: {id}</p>
            <Link href="/">Back</Link>
        </div>
    )
}