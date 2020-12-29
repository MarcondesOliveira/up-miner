module.exports = function() {
  var faker = require('faker');
  var _ = require('lodash')
  
  return {
    apps: _.times(9, function(n) { 
      return {
        id: n + 1,
        mainApps: faker.name.findName(),
        info: faker.commerce.productDescription(),
        price: faker.random.number(),
        icon: faker.image.avatar()
      }
    })
  }
}