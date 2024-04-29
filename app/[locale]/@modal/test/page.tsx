import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/[locale]/components/modal";

export default function ModalPage({params: {locale}}: {params: {locale: string}}) {

    unstable_setRequestLocale(locale)
    return (
        <Modal>
            <h1>Modal for Test page</h1>
        </Modal>
    )
}