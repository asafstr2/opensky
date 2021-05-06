import express from 'express';
import cors from 'cors';
import { mailgun } from './utils.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("gooooooood");
});

app.post('/api/form', (req, res) => {
  const { name, phone, email } = req.body;
  res.json(name);

  mailgun()
    .messages()
    .send(
      {
        from: `פניה חדשה - שמים פתוחים ${email}`,
        to: `m.avitan053@gmail.com `,
        subject: `פניה חדשה - מ : ${name}`,
        html: `<h3 dir="rtl"> פרטי הפניה: </h3>
            <ul dir="rtl">
                <li>${name}</li>
                <li>${phone}</li>
                <li>${email}</li>
            </ul>
        `
      },
      (error, body) => {
        if (error) {
          console.log(error);
        } else {
          console.log(body);
        }
      }
    );

});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://loclahost:${port}`);
})
