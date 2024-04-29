import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/[locale]/components/modal";

export default function ModalPage({params: {id, locale}}: { params: { id: string, locale: string } }) {
    //Needed for static rendering
    //Docs on https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
    //Needs to be used before any other intl hook otherwise it will cause the build to fail
    unstable_setRequestLocale(locale)

    return (
        <Modal>
            <h1>Modal for Item page</h1>
            <p>Param: {id}</p>
        </Modal>
    )
}