import { H3Event } from "h3";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    const { email, phone, message, name } = body;

    const msg: any = {
      to: "mohibali2017@gmail.com",
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "New Message from Photography Magazine",
      html: `
      <p>You have received a new message from Bibin Photography Magazine</p>
      <p>Following is the filled form data:</p>
      <ul>
        <li>Nom & Prenom : ${name}</li>
        <li>Email : ${email}</li>
        <li>Phone : ${phone}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    };

    await sgMail.send(msg);
  } catch (error) {
    return { error };
  }
});
