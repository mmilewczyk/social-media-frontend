import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {editGroup} from "../../actions/GroupAction";

function EditGroupModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(data);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.stopPropagation();
        dispatch(editGroup(formData, data.groupId));
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
                <h3>Edit group</h3>
                {formData &&
                    <div>
                        <input type={"text"}
                               placeholder={"Group Name"}
                               className={"infoInput"}
                               name={"groupName"}
                               onChange={handleChange}
                               value={formData.groupName}/>
                        <input type={"text"}
                               placeholder={"Description"}
                               className={"infoInput"}
                               name={"description"}
                               onChange={handleChange}
                               value={formData.description}/>
                    </div>
                }
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Save
                </button>
            </form>
        </Modal>)
}

export default EditGroupModal;