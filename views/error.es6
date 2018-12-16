const MyLayout = require('./layout.es6')

class Posts extends MyLayout {
    content () {
        const data = this.data
        const posts = data.posts
        let markup = `This is an error page kindly look into the project structure`        
        return markup
    }
}

module.exports = Posts