import {Modal, useMantineTheme} from "@mantine/core";
import React from "react";
import Users from "../../components/Users/Users";

function GroupMembersModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colorScheme = 'dark' : theme.colorScheme = 'light'}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"lg"}
            radius={"10px"}
            opened={modalOpened}
            onClose={(event) => {
                event.stopPropagation();
                setModalOpened(false);
                event.preventDefault();
            }}
        >
            <form className={"infoForm"}>
                <h3>Members</h3>
                <div style={{height: "20rem"}}>
                    {data && <Users data={data.members}/>}
                </div>
            </form>
        </Modal>)
}

export default GroupMembersModal;