const MyLayout = require('./layout.es6')

class DashBoard extends MyLayout {
    content () {
        const data = this.data
        console.log(data.json)
        const posts = data.posts
       let markup=``
         markup +=`<div class="row">
    <div class="col-md-3" style="background-color:lightblue;">
        <center> 
          <button type="submit">Logout</button>
          <img src="/images/logout.jpg" style="height: 30px;width: 50px;">
        </center>
        <center>
      <img src="/images/hemant.jpg" style="border-radius: 94px;width: 195px;height: 156px;margin-top: 37px;">
            Hemant Mishra
    <div class="col-md-12" style="background-color: #dfd2da;height: 100px;width: 250px;    margin-left: 8px">
              </div>
            </center>
               </div>
        <div class="col-md-7" style="background-color:lightgrey;height: 100%;">
            <div style="height: 85%;background-color:lightyellow;">
                <div class="col-md-12" style="background-color:#ddd0df;height:15%;width: 80%;left:20%;">
                    self
                </div>
                <div class="col-md-12" style="background-color:#c2a8a8;height:15%;width: 80%;">
                    friend
                </div>
            </div>
            <div class="col-md-12" style="height: 15%;background-color:white;">
                <div class="row">
                    <div class="col-md-10">
                        <textarea style="width: 100%;">
                            </textarea>
                    </div>
                    <div class="col-md-2">
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-2" style="background-color:white;height: 100%;">
            <table border="1" style="width: 100%;">
                <thead>
                    <tr>
                        <th>Users Online</th>
                    </tr>
                </thead>
                <tbody>`
                    data.json.map(i=>{
                    markup+=`<tr>
                              <td>
                                  <div class="row">
                                      <div class="col-md-3">`
                        if(i.name=="abhijeet" || i.name=="sanjana"){
                         markup+=`<img src="/images/offline.png" style="width: 20px;">`
                        } 
                        else{
                         markup+=` <img src="/images/online.png" style="width: 15px;">`

                      }               
                                     markup+=`</div>
                                      <div class="col-md-9" style="height: 15%;background-color:white;">
                                          <button type="button" style="width: 110px;" class="btn btn-success">${i.name}</button>
                                      </div>
                                  </div>
                              </td>
                          </tr>`
                    })
                    /* for(let i=1;i<=18;i++) { markup+=`<tr>
                        <td>Abhijeet</td>
                        </tr>`
                        }*/
                        markup +=`</tbody>
            </table>     </div>
    </div>`
  
  return markup



       
    }
}

module.exports = DashBoard