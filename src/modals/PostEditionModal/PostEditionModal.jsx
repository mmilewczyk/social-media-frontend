import React, {useState} from 'react';
import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import {updatePostById} from "../../actions/PostAction";

function PostEditionModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(data);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.stopPropagation();
        dispatch(updatePostById(data.postId, formData));
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
                <h3>Edit your post</h3>
                <div>
                    <input type={"text"}
                           placeholder={"Title"}
                           className={"infoInput"}
                           name={"title"}
                           onChange={handleChange}
                           value={formData.title}/>
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

export default PostEditionModal;