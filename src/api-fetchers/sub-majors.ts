import { GET_SUBMAJORS_ENDPOINT } from "@/utils/endpoints"

export async function getSubMajors(): Promise<any> {
    const response = await fetch(GET_SUBMAJORS_ENDPOINT)
    const data = await response.json()
    return data
}

export async function createSubmajor(input: any, token: string): Promise<any> {
    const { departement_id } = input
    const response = await fetch(GET_SUBMAJORS_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...input, departement_id: +departement_id}),
    })
    const data = await response.json()
    return data
}

export async function updateSubmajor(token: string, input: any, id: string | number): Promise<any> {
    const UPDATE_SUBMAJORS_ENDPOINT = `${GET_SUBMAJORS_ENDPOINT}/${id}`
    const response = await fetch(UPDATE_SUBMAJORS_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(input),
    })
    const data = await response.json()
    return data
}

export async function deleteSubmajor(token: string, id: string | number): Promise<any> {
    const DELETE_SUBMAJORS_ENDPOINT = `${GET_SUBMAJORS_ENDPOINT}/${id}`
    const response = await fetch(DELETE_SUBMAJORS_ENDPOINT, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}