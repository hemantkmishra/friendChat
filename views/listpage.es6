const MyLayout = require('./layout.es6')

class ListPage extends MyLayout {
    content () {
        const data = this.data
       let markup=`
       <form method="POST" action="/listpage">
          <input type="text" name="fname" id="fname">
          <button type="submit">fetch</button>
        </form>
       `
        data.result.map(i=>{
         markup +=`<div>${i.name}${i.password}</div>`
        })
  
  return markup



       
    }
}

module.exports = ListPage