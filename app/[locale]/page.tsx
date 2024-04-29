import Link from "next/link";

export default function Home({params: {locale}}: {params: {locale: string}}) {
    return (
        <div>
            <h1>Home Page</h1>
            <br/>
            <Link href={`/${locale}/item/123`}>Item link</Link>
            <br/>
            <Link href={`/${locale}/test`}>Test link</Link>
        </div>
    );
}
