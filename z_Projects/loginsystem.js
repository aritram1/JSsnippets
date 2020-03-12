//Users can login to the system and get a message on success
//Users can count how many times they logged in
//Only Admin usres can find total login to the system

let MAX_USERS = 50;
let now = new Date();
let systemlogincount = 200;
let currentusercount = 0;

let user = {
	name:'aritra',
    email:'aritra@email.com',
  	count: 0,
  	login: function(){
        this.count = this.count + 1;
        currentusercount = currentusercount + 1;
        console.log(`${this.name} with email ${this.email} has logged in ${this.count} time/s`);
    }
};
let logins = {
	getsystemlogincount: function(users){
        if(users){
            return users.reduce(function(user){
                return user.count;
            }, 0);
        }
        else 
            return systemlogincount;
    },
	lastlogin: {
      hour : now.getHours(),
      minute : now.getMinutes()
    },
  	getlastlogin: function(){
    	return `${this.lastlogin.hour}h : ${this.lastlogin.minute}m`;
    }
}
let systemload = Math.floor(Math.random(1) * 100);
let system = {
    //me: this,
    maxusers: MAX_USERS,
    currentusercount: currentusercount,
  	systemload: systemload
}

//Lets test it

//create some users
let aritra = Object.assign({}, user);

//Test logins
aritra.login();
aritra.login();


//Expected
//aritra with email aritra@email.com has logged in 1 time/s
//aritra with email aritra@email.com has logged in 2 time/s
