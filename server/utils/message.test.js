var expect =require('expect');

var {generateMessage} = require("./message");

describe("generateMessage" ,()=>{

    var from = "tanu sahoo";
    var text = "my beloved grand maa"

    var message = generateMessage(from , text);
    it('should be generate the correct message', function () {
     expect(message.createat).toBeA('number');
     expect(message).toInclude({from , text})
    });
})