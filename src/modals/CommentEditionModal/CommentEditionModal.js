import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {editCommentById} from "../../actions/CommentAction";

function CommentEditionalModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(data);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.stopPropagation();
        dispatch(editCommentById(data.commentId, formData));
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
                <h3>Edit your comment</h3>
                <div>
                    <input type={"text"}
                           placeholder={"Body"}
                           className={"infoInput"}
                           name={"body"}
                           onChange={handleChange}
                           value={formData.body}/>
                </div>
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Save
                </button>
            </form>
        </Modal>)
}

export default CommentEditionalModal;