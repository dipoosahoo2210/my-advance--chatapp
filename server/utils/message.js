var generateMessage= (from , text)=>{
    return {
      from,
      text,
      createat:new Date().getTime()
    }
}

module.exports = {
    generateMessage
}