import express from "express"
import IDVerificationRoute from './IDVerification.js';
import IDCreationRoute from './IDCreation.js';

const app = express()

app.use(IDVerificationRoute);
app.use(IDCreationRoute);

export default app;
