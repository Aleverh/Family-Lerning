import React from "react";
import dayjs from "dayjs";
import useMessages from "../../../hooks/useMessage";
const RenderMessages = ({ currentUser, user }) => {
    const messages = useMessages(currentUser, user)
    const checkSender = (item) => {
        if (item.senderId === currentUser.id){
            return "message-sender"
        } return "message"
    }
    const checkSender2 = (item) => {
        if (item.text !== ""){
            if (item.senderId === currentUser.id){
                return "message-sender-text"
            } return "message-text"
        }
    }
    const checkSender3 = (item) => {
        if (item.senderId === currentUser.id){
            return currentUser.photoUrl
        } return user.photoUrl
    }
    if (user && messages){
        return (
                <div>
                    {messages.map(item => (
                        <div key={item.date} className={checkSender(item)}>
                            <div className="message-text-content">
                                <div className={checkSender2(item)}>{item.text}</div>
                                <img width="50%" style={{ maxHeight: "200px" }} src={item.img}/>
                            </div>
                            <div className="sender-info">
                                <img src={checkSender3(item)} height="40px" width="40px" className="avatar" alt="ava"/>
                                <span  className="message-date">{dayjs(item.date).format('D MM, H:m')}</span>
                            </div>
                        </div>
                    ))
                }</div>
            )
        }
}
export default RenderMessages