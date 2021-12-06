import express from "express"
import IDVerificationRoute from './IDVerification.js';
const app = express()

app.use(IDVerificationRoute);

export default app;
