const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const dbURI = 'mongodb+srv://alrghms:plTdvtZ8IB7kydeG@aylar.kgkin3f.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { dbName: "Marketplace" })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the DressStore Application' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

