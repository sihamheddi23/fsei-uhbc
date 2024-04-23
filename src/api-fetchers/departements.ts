import { DEPARTEMNTS_ENDPOINT } from "@/utils/endpoints"
import { Departement } from "@/utils/types"

export async function getDepartements(): Promise<Departement[]> {
    const response = await fetch(DEPARTEMNTS_ENDPOINT)
    const data = await response.json()
    return data
}

export async function addDepartement(input: Departement, token: string): Promise<Departement> {
    const { head_departement_id } = input
    const userId = +head_departement_id 
    const response = await fetch(DEPARTEMNTS_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({...input, head_departement_id: userId}),
    })
    const data = await response.json()
    return data
}

export async function updateDepartement(token: string, input: Departement, id: number | string): Promise<Departement> {
    const UPDATE_DEPARTEMNT_ENDPOINT = `${DEPARTEMNTS_ENDPOINT}/${id}`
    const { head_departement_id } = input
    const userId = +head_departement_id 
    const response = await fetch(UPDATE_DEPARTEMNT_ENDPOINT, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({...input, head_departement_id: userId}),
    })
    const data = await response.json()
    return data
}

export async function deleteDepartement(token: string, id: string | number): Promise<any> {
    const DELETE_DEPARTEMNT_ENDPOINT = `${DEPARTEMNTS_ENDPOINT}/${id}`
    const response = await fetch(DELETE_DEPARTEMNT_ENDPOINT, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}