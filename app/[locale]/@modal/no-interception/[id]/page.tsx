import Modal from "../../../components/modal";

export default function ModalPage({params: {id}}: { params: { id: string } }) {
    return (
        <Modal>
            <h1>Modal for No Interception Page</h1>
            <p>Param: {id}</p>
        </Modal>
    )
}