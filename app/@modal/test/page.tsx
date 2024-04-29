import {unstable_setRequestLocale} from "next-intl/server";
import Modal from "@/app/components/modal";

export default function ModalPage() {

    unstable_setRequestLocale('en')
    return (
        <Modal>
            <h1>Modal for Test page</h1>
        </Modal>
    )
}