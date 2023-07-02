import axios from 'axios';
import EventInterface from '../models/EventInterface';
export const getEvents = async () => {
    const response = await axios.get('http://localhost:1337/api/events?populate=*');
    return response.data;
}
export const addEvents = async (event:EventInterface) => {
    const response = await axios.post('http://localhost:1337/api/events',event);
    return response.data;
}
export const getEventsId = async (id: number) => {
    const response = await axios.get(`http://localhost:1337/api/events/${id}?populate=*`);
    return response.data;
}
export const updateEvents = async (event:EventInterface) => {
    const response = await axios.put(`http://localhost:1337/api/events/${event.id}`,event);
    return response.data;
}
export const deleteEvents = async (id: number) => {
    const response = await axios.delete(`http://localhost:1337/api/events/${id}`);
    return response.data;
}
