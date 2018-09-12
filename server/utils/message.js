var generateMessage= (from , text)=>{
    return {
      from,
      text,
      createat:new Date().getTime()
    }
}



var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createat: new Date().getTime()
    }
};

module.exports ={generateMessage,generateLocationMessage}
