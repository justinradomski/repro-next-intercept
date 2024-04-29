import Link from "next/link";

export default function Modal(props: { children: React.ReactNode }) {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black border-2 border-solid">
            {props.children}

            <a href="/">close</a>
        </div>
    )
}