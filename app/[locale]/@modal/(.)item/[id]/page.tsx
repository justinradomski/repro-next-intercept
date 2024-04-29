import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/[locale]/components/modal";

export default function ModalPage({params: {id, locale}}: {params: {id: string, locale: string}}) {

    unstable_setRequestLocale(locale)
    return (
        <Modal>
            <h1>Modal for Item page</h1>
            <p>Param: {id}</p>
        </Modal>
    )
}