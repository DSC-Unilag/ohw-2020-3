// Import express
const express = require('express');

// Import morgan
const morgan = require('morgan');

// Initiate the app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

// Listen to requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Set Up static files
app.use(express.static('public'));

// Using morgan to log instead
app.use(morgan('dev'));

// Respond to /
app.get('/', (req, res) => {
	res.render('index', { title: 'Home'});
});

// Respond to /
app.get('/about', (req, res) => {
	res.render('about', { title: 'About'});
});

// Respond to /contact
app.get('/contact', (req, res) => {
	res.render('contact', { title: 'Create'});
});

app.use((req, res) => {
	res.status(404).render('404', { title: '404'});
});