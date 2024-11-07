const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ig/:username', (req, res) =>{
   const {username} = req.params;
   const instaData = require('./data.json');
   const data = instaData[username];
   if(data){
    res.render('profile', {data})
   }
   else{
    res.send('User not found')
   }
   //res.render('profile',{data})
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});