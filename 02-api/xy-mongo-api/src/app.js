const express =  require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
// routes 

// Middlewares

// Starter server
app.listen(app.get('port'), () => {
    console.log(`Server in port ${app.get('port')}`);
});