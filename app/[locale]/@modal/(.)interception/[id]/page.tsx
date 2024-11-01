import Modal from "../../../components/modal";

export default async function ModalPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    const {
        id
    } = params;

    return (
        <Modal>
            <h1>Modal for Interception Page</h1>
            <p>Using route interception</p>
            <p>Param: {id}</p>
        </Modal>
    )
}