import app from './app';
import 'dotenv/config';

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`Server is running
   on port ${process.env.APP_PORT || 3000}`);
});
