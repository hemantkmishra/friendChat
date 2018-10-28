const MyLayout = require('./layout.es6')

class Posts extends MyLayout {
    content () {
        const data = this.data
        const posts = data.posts
        let markup = ``
        markup += `<button type="submit" class="btn btn-success">click me</button><br>`
               markup += `<input type="submit" class="btn btn-success" value="click me"/>`
        markup +=`<table border="1px"><thead><tr><th>Name</th><th>class</th></tr></thead><tbody><tr><td>abhijeet singh</td><td>Btech</td><tr/></tody></table>` 
        
        return markup
    }
}

module.exports = Posts