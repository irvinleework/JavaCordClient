import React from "react";


type AuthProps = {
    sessionToken: string | undefined | null
    channel: any
    getFriendList: () => void
    friend: UserType[]
}
type UserType = {
        userName: string
        User?: any
        userId?: string
    }

const FriendDisplay = (props: AuthProps) => {
    return(
        <div className="friendbox">
            {props.friend.map((props: UserType) => {
                return(
                   <>
                   <ul className="friendList" key={props.userId}>
                    <li className="friendNames">
                        {props.userName}
                    </li>
                   </ul>
                   </> 
                )
            })}
        </div>
    )
}

export default FriendDisplay