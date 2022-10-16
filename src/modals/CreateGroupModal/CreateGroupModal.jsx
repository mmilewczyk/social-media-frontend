import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React, {useRef} from "react";
import {createNewGroup} from "../../actions/GroupAction";

function CreateGroupModal({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const groupName = useRef();
    const description = useRef();

    const handleSubmit = (event) => {
        event.stopPropagation();
        const newGroup = {
            groupName: groupName.current.value,
            description: description.current.value
        }
        dispatch(createNewGroup(newGroup));
        setModalOpened(false);
        event.preventDefault();
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colorScheme = 'dark' : theme.colorScheme = 'light'}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"55%"}
            radius={"10px"}
            opened={modalOpened}
            onClose={(event) => {
                event.stopPropagation();
                setModalOpened(false);
                event.preventDefault();
            }}
        >
            <form className={"infoForm"}>
                <h3>Create group</h3>
                <div>
                    <input type={"text"}
                           placeholder={"Name"}
                           className={"infoInput"}
                           name={"groupname"}
                           ref={groupName}/>
                    <input type={"text"}
                           placeholder={"Description"}
                           className={"infoInput"}
                           name={"description"}
                           ref={description}
                    />
                </div>
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Save
                </button>
            </form>
        </Modal>)
}

export default CreateGroupModal;