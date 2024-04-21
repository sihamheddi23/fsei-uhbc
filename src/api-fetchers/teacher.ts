import { GET_TEACHERS_ENDPOINT } from "@/utils/endpoints"

export async function getTeachers(): Promise<any> {
    const response = await fetch(GET_TEACHERS_ENDPOINT)
    const data = await response.json()
    return data
}