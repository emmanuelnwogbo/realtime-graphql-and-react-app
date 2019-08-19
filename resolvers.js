const user = {

  _id: '1',

  name: "Reed",

  email: "reedbargar@yahoo.com",

  picture: "https://cloudinary.com/asdf"

}

module.exports = {

  Query: {

    me: () => user
    
  }
}