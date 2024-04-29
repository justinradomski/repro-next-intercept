import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/components/modal";

export default function ModalPage({params: {id}}: {params: {id: string}}) {

    unstable_setRequestLocale('en')
    return (
        <Modal>
            <h1>Modal for Item page</h1>
            <p>Param: {id}</p>
        </Modal>
    )
}