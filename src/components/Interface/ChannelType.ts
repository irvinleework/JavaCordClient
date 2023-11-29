export interface ChannelType{
    name?: string
    channelId: string
}
export interface InvitedChannelType{
    userId?: string
    email?: string
    password?: string
    userName?: string
    firstName?: string
    lastName?: string
    channel: ChannelType[]
}