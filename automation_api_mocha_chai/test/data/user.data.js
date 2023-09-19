export const VALID_REGISTER ={
    "username" : "admin",
    "password" : "password123"
}


export const GET_BOOKING_PARAMS ={
    page : 1
}

export const CREATE_BOOKING ={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

export const UPDATE_BOOKING ={
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

export const PARTIAL_UPDATE = {
    "firstname" : "James",
    "lastname" : "Brown"
}
