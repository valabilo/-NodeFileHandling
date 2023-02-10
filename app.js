const ex= require('express')
const wd = ex()
const fs = require('fs');
wd.set("view engine", "ejs")
wd.use(ex.urlencoded({ extended: true}))

wd.get('/login', 
    (r1, r2) => {
        r2.render("login", {error: false})
});

wd.post('/login', (r1, r2) => 
    {
    const { username, password } = r1.body;
    
    if(username === 'admin' && password === '123456'){
        r2.render('form')
    }   else {
        r2.render("login", { error: true })
    }

});

wd.post('/form-registration', 
    (req, res) => {
        let fname = req.body.firstname
        let lname = req.body.lastname
        let add = req.body.address
        let age = req.body.age
        let emailadd = req.body.emailaddress

        fs.writeFile('storage/myInfo.txt', 
            "First Name:" + fname +
            ", Last Name:" + lname + 
            ", Address:" + add + 
            ", Age:" + age +
            ", Email Address:" + emailadd, function (err) {
                if (err) throw err;
                console.log('Details saved successfully!')
                res.end();
            });
            

    })

wd.listen(4000)
