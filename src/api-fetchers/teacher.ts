import { GET_TEACHERS_ENDPOINT } from "@/utils/endpoints"
import { Teacher } from "@/utils/types"

export async function getTeachers(limit?: number): Promise<any> {
    const response = await fetch(GET_TEACHERS_ENDPOINT+`?limit=${limit}`)
    const data = await response.json()
    return data
}

export async function addTeacher(input: Teacher, token: string): Promise<any> {
    const { user_id } = input
    const userId = +user_id 
    const response = await fetch(GET_TEACHERS_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({...input, user_id: userId}),
    })
    const data = await response.json()
    return data
}

export async function updateTeacher(token: string, input: any, id: string | number): Promise<any> {
    const UPDATE_TEACHERS_ENDPOINT = `${GET_TEACHERS_ENDPOINT}/${id}`
    const response = await fetch(UPDATE_TEACHERS_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,

        },
        body: JSON.stringify(input),
    })
    const data = await response.json()
    return data
}

export async function deleteTeacher(token: string, id: string | number): Promise<any> {
    const DELETE_TEACHERS_ENDPOINT = `${GET_TEACHERS_ENDPOINT}/${id}`
    const response = await fetch(DELETE_TEACHERS_ENDPOINT, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}