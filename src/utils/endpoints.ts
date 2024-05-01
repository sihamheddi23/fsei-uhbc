import { FACULTY_API_BASE_ENDPOINT } from "./const";

export const LOGIN_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/auth/login`;
export const LOGOUT_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/auth/logout`;
export const USER_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/auth/users`;
export const ADD_USER_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/auth/add-user`;

export const GET_TEACHERS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/teacher`;

export const DEPARTEMNTS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/departement`;

export const GET_SUBMAJORS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/sub-major`;

export const GET_HEAD_DEPARTEMNTS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/teacher/head-departement`;
export const GET_ADS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/ads`;

export const SUBJECTS_ENDPOINT = `${FACULTY_API_BASE_ENDPOINT}/subject`;

export const SCHEDULES = `${FACULTY_API_BASE_ENDPOINT}/schedule`