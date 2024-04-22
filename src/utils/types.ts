export type FormError = {
    [field: string]: string[]
}

export type LoginOutput = {
    token: string,
    role: Role
}

export type Role = "Admin" | "Teacher" | "HeadDepartement";
export type Grade = "MAB" | "MAA" | "MCA" | "MBA";

export type User = {
    _id?: number,
    username: string,
    password?: string,
    role: Role,
    email: string
}

export type Teacher = {
    _id?: number,
    first_name: string,
    last_name: string,
    grade: Grade,
    user_id: number
}