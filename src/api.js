import axios from "axios"
import { v4 as uuid } from 'uuid'

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`
const instance = axios.create({
    baseURL: BASE_URL
})

export const getDataAPI = () => {
    const response = instance.get()
    return response
}
export const postDataAPI = (value) => {
    const newTodo = { userId: uuid(), title: value, completed: false }
    const response = instance.post(BASE_URL, newTodo)
    return response
}
export const deleteDataAPI = (id) => {
    const response = instance.delete(`/${id}`)
    return response
}
export const patchDataAPI = (id, title) => {
    const newTodo = {title}
    const response = instance.patch(`/${id}`, newTodo)
    return response
}
export const putDataAPI = (id, completed) => {
    const newTodo = { completed: !completed}
    const response = instance.put(`/${id}`, newTodo)
    return response
}