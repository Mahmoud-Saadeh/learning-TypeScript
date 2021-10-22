import express from 'express';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();

// app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({ keys: ['mahmoud'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening in PORT 3000');
});
