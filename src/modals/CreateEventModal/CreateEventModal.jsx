import {Modal, useMantineTheme} from "@mantine/core";
import {useDispatch} from "react-redux";
import React, {useRef} from "react";
import {createNewEvent} from "../../actions/EventAction";

function CreateEventModal({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const name = useRef();
    const startAt = useRef();
    const endAt = useRef();
    const location = useRef();
    const isPrivate = useRef();
    const description = useRef();
    const hashtags = useRef();

    const handleSubmit = (event) => {
        event.stopPropagation();
        const newEvent = {
            name: name.current.value,
            startAt: startAt.current.value,
            endAt: endAt.current.value,
            location: location.current.value,
            isPrivate: isPrivate.current.value,
            hashtags: hashtags.current.value,
        }
        dispatch(createNewEvent(newEvent));
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
                <h3>Create event</h3>
                <div>
                    <input type={"text"}
                           placeholder={"Name"}
                           className={"infoInput"}
                           name={"name"}
                           ref={name}/>
                    <input type={"text"}
                           placeholder={"Location"}
                           className={"infoInput"}
                           name={"location"}
                           ref={location}/>
                </div>
                <div>
                    <input type={"datetime-local"}
                           placeholder={"Start At"}
                           className={"infoInput"}
                           name={"startAt"}
                           ref={startAt}/>
                    <input type={"datetime-local"}
                           placeholder={"End At"}
                           className={"infoInput"}
                           name={"endAt"}
                           ref={endAt}/>
                    <input type={"checkbox"}
                           className={"infoInput"}
                           name={"isPrivate"}
                           ref={isPrivate}/>
                </div>
                <div>
                    <input type={"text"}
                           className={"infoInput"}
                           name={"description"}
                           ref={description}/>
                </div>
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Save
                </button>
            </form>
        </Modal>)
}

export default CreateEventModal;