import Modal from "@/app/[locale]/components/modal";

export default function ModalPage({params: {id}}: { params: { id: string } }) {
    return (
        <Modal>
            <h1>Modal for Item page</h1>
            <p>Using route interception</p>
            <p>Param: {id}</p>
        </Modal>
    )
}