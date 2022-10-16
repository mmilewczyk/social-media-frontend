import {Modal, useMantineTheme} from '@mantine/core';
import React from "react";
import PostShare from "../../components/PostShare/PostShare";

function ShareModal({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colorScheme = 'dark' : theme.colorScheme = 'light'}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"55%"}
            radius={"10px"}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <PostShare/>
        </Modal>)
}

export default ShareModal;