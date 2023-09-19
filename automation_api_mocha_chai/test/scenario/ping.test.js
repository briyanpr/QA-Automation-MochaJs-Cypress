import { assert } from "chai";
import BookerApi from "../page/booker.api";


describe('Health Check', ()=>{
    it('Verify simple health check endpoint', async()=>{
        const response = await BookerApi.healthcheck();

        assert.equal(response.status, 201);
    }); 


})