const MyLayout = require('./layout.es6')

class Posts extends MyLayout {
    content () {
        const data = this.data
        console.log(data.json)
        const posts = data.posts
       let markup=``
         markup +=`
<div class="container">
    <div class="row">
        <div class="col-md-4" style="background-color:lightgrey;">
        	<div class="row">
        	<div class="col-md-2">
	        	<img src="/images/logo.png" style="width: 40px;height: 40px;margin-top: 21px;">
        	</div>
        	<div class="col-md-10">
	            <label for="uname"><b style="font-size: 38px;" >FRIENDCHAT</b></label>
        	</div>
		</div>
        </div>
        <div class="col-md-8" style="background-color:lightblue;">
            <form action="action_page.php" autocomplete="off">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" autocomplete="off" required>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" autocomplete="off" required>
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>
            </form>
        </div>
        </div>
    <div class="row">
        <div class="col-md-8" style="background-color:lightgrey;">
        	<div class="col-md-2">
	        	<img src="/images/chat-apps.jpg" style="width: 600px;">
        	</div>
        </div>
        <div class="col-md-4" style="background-color:lightblue;">
            <form action="action_page.php" autocomplete="off" style="border:1px solid #ccc">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <div class="col-md-4" style="background-color:lightblue;">
                  <label for="email"><b>Email</b></label>
                 </div>
                <div class="col-md-8" style="background-color:lightblue;">
                <input type="text" placeholder="Enter Email" name="email" autocomplete="off" required>
            </div>
                 <div class="col-md-4" style="background-color:lightblue;">
                <label for="psw"><b>Password</b></label>
            </div>
                 <div class="col-md-8" style="background-color:lightblue;">
                <input type="password" placeholder="Enter Password" name="psw" autocomplete="off" required>
            </div>
                <div class="col-md-4" style="background-color:lightblue;">
                <label for="psw-repeat"><b>Repeat Password</b></label>
            </div>
                 <div class="col-md-8" style="background-color:lightblue;">
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
            </div>
                <label>
                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                </label>
                <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
                <div class="clearfix">
                  <button type="submit" class="signupbtn">Sign Up</button>
                </div>
        	</form>
        </div>
    </div>
    </div>`



  
  return markup


       
    }
}

module.exports = Posts