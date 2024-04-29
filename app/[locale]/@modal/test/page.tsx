import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/[locale]/components/modal";

export default function ModalPage({params: {locale}}: { params: { locale: string } }) {
    //Needed for static rendering
    //Docs on https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
    //Needs to be used before any other intl hook otherwise it will cause the build to fail
    unstable_setRequestLocale(locale)

    return (
        <Modal>
            <h1>Modal for Test page</h1>
        </Modal>
    )
}