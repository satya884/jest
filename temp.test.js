
const getuserbyId = require('./userbyId')
const userData = require('./data')

const mockRequest = {
    id : 1
};

const mockResponse = {
    send : jest.fn(),
    sendStatus : jest.fn()
}

describe("get users" , () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test(`getting user with id = ${mockRequest.id}` , () => {
        getuserbyId(mockRequest,mockResponse);
        const user = userData.filter(a => a["id"]==mockRequest.id).map(a => a.name); 
        expect(mockResponse.send).toHaveBeenCalled()
        expect(mockResponse.send).toHaveBeenCalledWith(user)
    })
    test(`eror in getting user with id` , () => {
        const copyMockReq = {...mockRequest}; copyMockReq.id=100
        getuserbyId(copyMockReq,mockResponse);
        expect(mockResponse.send).not.toHaveBeenCalled()
        expect(mockResponse.sendStatus).toHaveBeenCalledWith(404)
        expect(mockResponse.send).not.toHaveBeenCalledTimes(1)
    })

})
