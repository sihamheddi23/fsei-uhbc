import { COURSES_ENDPOINT, GET_COURSES_FOR_AUTH_USERS } from "@/utils/endpoints"

export async function getCoursesByAuthTeacher(token: string): Promise<any> {
    const response = await fetch(GET_COURSES_FOR_AUTH_USERS, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data

}

export async function createCourse(input: any, token: string): Promise<any> {
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("subject_id", input.subject_id);
    formData.append("document_pdf", input.document_pdf);
    
    const response = await fetch(COURSES_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    const data = await response.json()
    return data
}

export async function updateCourse(token: string, input: any, id: string | number): Promise<any> {
    const UPDATE_COURSES_ENDPOINT = `${COURSES_ENDPOINT}/${id}`

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("subject_id", input.subject_id);
    formData.append("document_pdf", input.document_pdf);
    
    const response = await fetch(UPDATE_COURSES_ENDPOINT, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    const data = await response.json()
    return data
}

export async function deleteCourse(token: string, id: string | number): Promise<any> {
    const DELETE_COURSES_ENDPOINT = `${COURSES_ENDPOINT}/${id}`
    const response = await fetch(DELETE_COURSES_ENDPOINT, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}