import React, {useEffect, useState} from "react";
import clip from "../../../images/clip.png";
import addPicture from "../../../images/picture.png";
import {useForm} from "react-hook-form";
import getUserChat from "../../../api/chatPage/getUserChat";
import getPhotoUrl from "../../../api/chatPage/getPhotoUrl";
import updateChat from "../../../api/chatPage/udateChat";
const SendingMessage = ({user, currentUser}) => {
    const [user2, setUser] = useState(null)
    useEffect(() => {
        setUser(user)
    }, [user])
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    useEffect( () => {
        if (user && user.chatId){
            getUserChat(user)
        }
    }, [user])
    const setMessages = async (text = '', img = '') => {
        const message = {
            date: new Date().toISOString(),
            img,
            senderId: currentUser.id,
            text,
        }
        await updateChat(user, message)
    }
    const onSubmit = async data => {

        if (data.img[0]){
            const photoUrl = getPhotoUrl(data);
            if (data.message !== ""){
                await setMessages(data.message, photoUrl)
            }
        } else if (data.message !== "") await setMessages(data.message)
        reset()
    }
    if (user2){
        return (
            <div className="sending-massage">
                <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("message")} className="sending-massage-input" placeholder="Type something..."/>
                    <div className="sending-menu">
                        <img alt="clip" width="24px" height="24px" src={clip}/>
                        <label for="input-for-images">
                            <input {...register("img")} id="input-for-images" className="input-for-images" type="file" style={{ display: 'none' }} multiple/>
                            <img alt="picture" width="24px" height="24px" src={addPicture} />
                        </label>
                        <button className="send-massage">Send</button>
                    </div>
                </form>

            </div>
        )
    }
}
export default SendingMessage