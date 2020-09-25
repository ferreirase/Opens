/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import seeder from 'mongoose-seed';
// import bcrypt from 'bcryptjs';
import path from 'path';

const host = process.env.MONGO_URL || 'localhost';
const db = `mongodb://${host}/opens`;
// eslint-disable-next-line no-return-await
// const hash = async () => await bcrypt.hash('123456', 8);

const data = [{
  model: 'User',
  documents: [
    {
      _id: '5f6cf6d4048091c70b606af6',
      login: 'admin',
      // eslint-disable-next-line no-return-await
      password: '123456',
      email: 'admin@gmail.com',
      name: 'Admin',
      isAdmin: true,
    },
  ],

}];

seeder.connect(db, () => {
  seeder.loadModels([`${path
    .resolve(__dirname, 'src', 'app', 'models', 'User.js')}`]);

  seeder.clearModels(['User'], function () {
    seeder.populateModels(data, function (err, done) {
      if (err) {
        return console.log(`Seed error: ${err}`);
      }

      if (done) {
        return console.log(`Seed success! ${done}`);
      }

      seeder.disconnect();
    });
  });
});
