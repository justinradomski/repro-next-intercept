import Modal from "../../../components/modal";

export default function ModalPage({params: {id}}: { params: { id: string } }) {
    return (
        <Modal>
            <h1>Modal for Interception Page</h1>
            <p>Using route interception</p>
            <p>Param: {id}</p>
        </Modal>
    )
}