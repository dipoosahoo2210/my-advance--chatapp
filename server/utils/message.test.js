var expect =require('expect');

const {generateMessage ,generateLocationMessage} = require("./message");

describe("generateMessage" ,()=>{

    var from = "tanu sahoo";
    var text = "my beloved grand maa"

    var message = generateMessage(from , text);
    it('should be generate the correct message', function () {
     expect(message.createat).toBeA('number');
     expect(message).toInclude({from , text})
    });
})

// describe("generateLocationMessage",()=>{
//
//     it('should  be generate the corret location afress', function () {
//         var from = "Dipoo";
//         var latitude = 15 ;
//         var longitude= 19 ;
//
//         var url = 'https://google.com/maps?q=15,24';
//
//         var message = generateLocationMessage(from ,latitude , longitude);
//         expect(message.createat).toBeA('number');
//         expect(message).toInclude({from , url})
//     });
//
// })