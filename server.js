import express from "express";
import cors from "cors";
import { mailgun } from "./utils.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/test", (req, res) => {
  res.send("gooooooood!!!!!");
});

app.post("/api/form", (req, res) => {
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
        `,
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

// if (process.env.NODE_ENV === "production") {
// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static("frontend/build"));

// Express will serve up the index.html file
// if it doesn't recognize the route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
// }
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://loclahost:${port}`);
});
