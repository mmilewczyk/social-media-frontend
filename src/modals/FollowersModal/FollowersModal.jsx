import {Modal, useMantineTheme} from "@mantine/core";
import React, {useEffect} from "react";
import Users from "../../components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {getFollowersOfUserByUserId} from "../../actions/FollowshipAction";

function FollowersModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();

    const dispatch = useDispatch();
    const {followers} = useSelector((state) => state.followshipReducer)

    useEffect(() => {
        dispatch(getFollowersOfUserByUserId(data.userId))
    }, []);


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
                <h3>Followers</h3>
                <div style={{height: "20rem"}}>
                    {data && <Users data={followers.content}/>}
                </div>
            </form>
        </Modal>)
}

export default FollowersModal;