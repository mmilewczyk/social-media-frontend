import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React from "react";
import {deletePostById} from "../../actions/PostAction";

function ConfirmationModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deletePostById(data.postId))
        closeModal(event)
    }

    const closeModal = (event) => {
        event.stopPropagation();
        setModalOpened(false);
        event.preventDefault();
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colorScheme = 'dark' : theme.colorScheme = 'light'}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"400px"}
            radius={"10px"}
            opened={modalOpened}
            onClose={(event) => {
                event.stopPropagation();
                setModalOpened(false);
                event.preventDefault();
            }}
        >
            <form className={"infoForm"}>
                <h3>Do you want to remove this?</h3>
                <div>
                    <button className={"button infoButton"} onClick={handleDelete}>Yes</button>
                    <button className={"button infoButton"} onClick={closeModal}>No</button>
                </div>
            </form>
        </Modal>
    )
}

export default ConfirmationModal;