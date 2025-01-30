// Collection for sending emails is 'mail'

export type EmailType = {
    to: string[],
    message: {
        subject: string,
        text: string,
        html: string
    },
}
