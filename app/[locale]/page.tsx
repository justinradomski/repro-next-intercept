import Image from "next/image";
import Link from "next/link";
import {unstable_setRequestLocale} from "next-intl/server";

export default function Home({params: {locale}}: {params: {locale: string}}) {
    unstable_setRequestLocale(locale)

    return (
        <div>
            <h1>Home Page</h1>
            <br/>
            <Link href={`${locale}/item/123`}>Item link</Link>
            <br/>
            <Link href={`${locale}/test`}>Test link</Link>
        </div>
    );
}
