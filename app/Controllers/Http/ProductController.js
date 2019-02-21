'use strict'

class ProductController {

    index({view}){
        const users = [1,2,3,4,5,6,7,8,9,10];
        return view.render('products/all', {users})
    }
}

module.exports = ProductController
