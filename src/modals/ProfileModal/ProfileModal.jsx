import {Modal, useMantineTheme} from '@mantine/core';
import React, {useState} from "react";
import "./ProfileModal.css"
import {useDispatch} from "react-redux";
import {editExistingUser} from "../../actions/UserAction";

function ProfileModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(data);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editExistingUser(formData));
        setModalOpened(false);
    }

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
            <form className={"infoForm"}>
                <h3>Your info</h3>
                <div>
                    <input type={"text"} placeholder={"Username"} className={"infoInput"} name={"username"}
                           id={"username"}
                           onChange={handleChange} value={formData.username} disabled={true}/>
                    <input type={"text"} placeholder={"First name"} className={"infoInput"} name={"firstName"}
                           onChange={handleChange} value={formData.firstName}/>
                </div>
                <div>
                    <input type={"date"} placeholder={"birthday"} className={"infoInput"} name={"birthday"}
                           onChange={handleChange} value={formData.birthday} required={true}/>
                    <input list={"genders"} placeholder={"Gender"} className={"infoInput"} name={"gender"}
                           onChange={handleChange} value={formData.gender} required={true}/>

                    <datalist id={"genders"}>
                        <option value={"MALE"}></option>
                        <option value={"FEMALE"}></option>
                    </datalist>

                    <input type={"text"} placeholder={"Current City"} className={"infoInput"} name={"currentCity"}
                           onChange={handleChange} value={formData.currentCity} required={true}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Hometown"} className={"infoInput"} name={"homeTown"}
                           onChange={handleChange} value={formData.homeTown} required={true}/>
                    <input type={"text"} placeholder={"Languages I Speak"} className={"infoInput"}
                           name={"speaks"} onChange={handleChange} value={formData.speaks} required={true}/>
                    <input type={"text"} placeholder={"Languages I'm Learning"} className={"infoInput"}
                           name={"learn"} onChange={handleChange} value={formData.learn}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Looking for"} className={"infoInput"} name={"lookingFor"}
                           onChange={handleChange} value={formData.lookingFor} required={true}/>
                    <input type={"text"} placeholder={"Relationship Status"} className={"infoInput"}
                           name={"relationshipStatus"} onChange={handleChange} value={formData.relationshipStatus}/>
                    <input type={"text"} placeholder={"Rank"} className={"infoInput"} name={"rank"} disabled={true}
                           onChange={handleChange} value={formData.rank}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Education"} className={"infoInput"} name={"education"}
                           onChange={handleChange} value={formData.education}/>
                    <div className={"infoCheckbox"}>
                        <span style={{fontSize: "12px"}}>Notify about comments</span>
                        <input type={"checkbox"} placeholder={"notifyAboutComments"} name={"notifyAboutComments"}
                               onChange={handleChange} value={formData.notifyAboutComments}
                               checked={formData.notifyAboutComments}/>
                    </div>
                </div>
                <div>
                    <textarea placeholder={"About me"} className={"infoInput"} name={"aboutMe"} cols={20} rows={5}
                              onChange={handleChange} value={formData.aboutMe}/>
                </div>
                <button style={{marginTop: "50px"}} className={"button infoButton"} onClick={handleSubmit}>Update
                </button>
            </form>
        </Modal>)
}

export default ProfileModal;