const MyLayout = require('./layout.es6')

class ListData extends MyLayout {
    content () {
        const data = this.data
        console.log(data)
       let markup=`
       <form method="POST" action="/listdata">
          <input type="text" name="fname" id="fname">
          <input type="email" name="emailaddress" id="emailaddress">
          <input type="password" name="pwd" id="pwd">
                    <button type="submit">Submit</button>
        </form>
        <div  style="margin-left: 84%;">
       <form method="POST" action="/getfilterdata">
          <input type="text" name="fname" id="fname">
          <button type="submit">Submit</button>
        </form>
        </div>        
       `
        data.result.map(i=>{
         markup +=`<div>${i.name}&nbsp;&nbsp;${i.password}&nbsp;&nbsp;${i.email}</div>`
             })
  
  return markup



       
    }
}

module.exports = ListData
  

