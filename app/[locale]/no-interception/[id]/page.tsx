import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    const {
        id
    } = params;

    return (
        <div>
            <h1>No Interception Page</h1>
            <p>No route interception</p>
            <p>Param: {id}</p>
            <Link href="/">Back</Link>
        </div>
    )
}