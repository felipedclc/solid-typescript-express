import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "eb59c0e6a88629",
        pass: "bb86074a3c567f",
      },
    });
  }

  async sendMail({ to, from, subject, body }: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: { name: to.name, address: to.email },
      from: { name: from.name, address: from.email },
      subject,
      html: body,
    });
  }
}
