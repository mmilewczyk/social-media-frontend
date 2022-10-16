import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {editEvent} from "../../actions/EventAction";

function EditEventModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(data);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.stopPropagation();
        dispatch(editEvent(data.eventId, formData));
        setModalOpened(false);
        e.preventDefault();
    }

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colorScheme = 'dark' : theme.colorScheme = 'light'}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"55%"}
            radius={"10px"}
            opened={modalOpened}
            onClose={(e) => {
                e.stopPropagation();
                setModalOpened(false);
                e.preventDefault();
            }}
        >
            <form className={"infoForm"}>
                <h3>Edit event</h3>
                {formData &&
                    <>
                        <div>
                            <input type={"text"}
                                   placeholder={"Event name"}
                                   className={"infoInput"}
                                   name={"name"}
                                   onChange={handleChange}
                                   value={formData.name}/>
                            <input type={"text"}
                                   placeholder={"Location"}
                                   className={"infoInput"}
                                   name={"location"}
                                   onChange={handleChange}
                                   value={formData.location}/>
                        </div>
                        <div>
                            <input type={"datetime-local"}
                                   placeholder={"Start At"}
                                   className={"infoInput"}
                                   name={"startAt"}
                                   onChange={handleChange}
                                   value={formData.startAt}/>
                            <input type={"datetime-local"}
                                   placeholder={"End At"}
                                   className={"infoInput"}
                                   name={"endAt"}
                                   onChange={handleChange}
                                   value={formData.endAt}/>
                            <input type={"checkbox"}
                                   className={"infoInput"}
                                   name={"isPrivate"}
                                   onChange={handleChange}
                                   value={formData.isPrivate}/>
                        </div>
                        <div>
                            <input type={"text"}
                                   className={"infoInput"}
                                   name={"description"}
                                   onChange={handleChange}
                                   value={formData.description}/>
                        </div>
                    </>
                }
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Save
                </button>
            </form>
        </Modal>)
}

export default EditEventModal;