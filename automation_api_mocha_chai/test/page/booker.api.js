import BaseApi from "../page/base.api";

const BookerApi = {
    auth: (data) => BaseApi.post('/auth', data),
    getbooking: (param) => BaseApi.get(`/booking/${param}`),
    getbookingid: ()=> BaseApi.get('/booking'),
    creategetbooking: (data)=> BaseApi.post('/booking', data),
    updatebooking: (data)=> BaseApi.put('/booking/1', data),
    partialupdate: (data)=> BaseApi.patch('/booking/1', data),
    deletebooking:()=> BaseApi.delete('/booking/1'),
    healthcheck:()=>BaseApi.get('/ping')
}

export default BookerApi;
