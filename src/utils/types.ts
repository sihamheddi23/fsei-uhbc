export type FormError = {
    [field: string]: string[]
}

export type LoginOutput = {
    token: string,
    role: Role
}

export type Role = "Admin" | "Teacher" | "HeadDepartement";

export type User = {
    _id?: number,
    username: string,
    password?: string,
    role: Role,
    email: string
}