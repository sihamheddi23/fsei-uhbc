import { SCHEDULES } from "@/utils/endpoints"

export async function getSchedules() {
    const response = await fetch(SCHEDULES)
    const data = await response.json()
    return data
}

export async function createSchedule(input: any, token: string) {
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("document_pdf", input.document_pdf);
    formData.append("sub_major_id", input.sub_major_id);

    const response = await fetch(SCHEDULES, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    const data = await response.json()
    return data
}

export async function updateSchedule(token: string, input: any, id: string | number) {
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("document_pdf", input.document_pdf);
    formData.append("sub_major_id", input.sub_major_id);

    const response = await fetch(`${SCHEDULES}/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    const data = await response.json()
    return data
}

export async function deleteSchedule(token: string, id: string | number) {
    const response = await fetch(`${SCHEDULES}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}