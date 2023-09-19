import { assert } from "chai";
import BookerApi from "../page/booker.api";
import * as data from "../data/user.data";

describe('Register Test', ()=>{
    it('Verify auth with input valid data', async()=>{
        const response = await BookerApi.auth(data.VALID_REGISTER);

        assert.equal(response.status, 200);

    })

})