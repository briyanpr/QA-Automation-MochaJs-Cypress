import chai, { assert, expect } from "chai";
import BookerApi from "../page/booker.api";
import * as data from "../data/user.data";
import { getParams } from "../helper/lib-api";
import * as schema from "../schema/list-user.schema";
import jsonSchema from "chai-json-schema";

chai.use(jsonSchema);

describe('Booking', ()=>{
    it('Validate get booking id', async()=>{
        const response = await BookerApi.getbookingid();

        assert.equal(response.status, 200);   
        expect(response.data).to.be.jsonSchema(schema.GET_BOOKING_ID_SCHEMA) 
    }); 

    it('Validate specific get booking id', async()=>{
        const param = getParams(data.GET_BOOKING_PARAMS.page)
        const response = await BookerApi.getbooking(param);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.GET_SPECIFIC_BOOKING_ID_SCHEMA)
    
    }); 

    it('Validate create booking', async()=>{
        const response = await BookerApi.creategetbooking(data.CREATE_BOOKING);

        assert.equal(response.status, 200);   
        expect(response.data).to.be.jsonSchema(schema.CREATE_BOOKING)
     
    }); 

    it('Validate update booking', async()=>{
        const response = await BookerApi.updatebooking(data.UPDATE_BOOKING);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.UPDATE_BOOKING)    
    }); 

    it('Validate partial update booking', async()=>{
        const response = await BookerApi.partialupdate(data.PARTIAL_UPDATE);

        assert.equal(response.status, 200);   
        expect(response.data).to.be.jsonSchema(schema.PARTIAL_UPDATE)  
    }); 

    it('Validate delete booking id', async()=>{
        const response = await BookerApi.deletebooking();

        assert.equal(response.status, 201);   
    }); 

})

