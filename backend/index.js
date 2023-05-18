const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/starRouter');

const app = express();


const corsOptions = {
  origin: '*',
};

app.use('/api', cors(corsOptions));

require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/star', userRouter );

app.listen(PORT, (req, res) => {
    console.log('listening on port ' + PORT);
})

