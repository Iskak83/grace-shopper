const User = require('./user')
const Book = require('./book')
const Author = require('./author')
const Cart = require('./cart')

Author.hasMany(Book)
Book.belongsTo(Author)

Cart.belongsToMany(User, {through: 'orderHistory'})
User.belongsToMany(Cart, {through: 'orderHistory'})
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Book,
  Author,
  Cart
}
