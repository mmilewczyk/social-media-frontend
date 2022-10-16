import {Modal, useMantineTheme} from "@mantine/core";
import React, {useEffect} from "react";
import Users from "../../components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {getFollowedUsersOfUserByUserId} from "../../actions/FollowshipAction";

function FollowedModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();

    const dispatch = useDispatch();
    const {followed} = useSelector((state) => state.followshipReducer)

    useEffect(() => {
        dispatch(getFollowedUsersOfUserByUserId(data.userId))
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
                <h3>Followed</h3>
                <div style={{height: "20rem"}}>
                    {data && <Users data={followed.content}/>}
                </div>
            </form>
        </Modal>)
}

export default FollowedModal;