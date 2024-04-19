export type FormError = {
    [field: string]: string[]
}

export type LoginOutput = {
    token: string,
    role: string
}