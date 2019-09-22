const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

//CONNECT TO DB
connectDB();

// INIT MIDDLEWARE
app.use(express.json({ extended: false }));

// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// SERVE STATIC ASSETS IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
   // SET STATIC FOLDER
   app.use('client/build');
   app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
