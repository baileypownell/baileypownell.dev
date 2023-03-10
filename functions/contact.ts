import AWS from 'aws-sdk';
import nodemailer, { SentMessageInfo } from 'nodemailer';

AWS.config.update({
  accessKeyId: process.env.SES_ACCESS_KEY,
  secretAccessKey: process.env.SES_SECRET_KEY,
  region: process.env.AWS_REGION_ID,
});

const handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);
    const mailer = nodemailer.createTransport({ SES: new AWS.SES() });
    const emailToSend = {
      from: `bailey.pownell@gmail.com`,
      to: `bailey.pownell@gmail.com`,
      subject: `Portolio Email from ${name}`,
      html: `<h2>${name}, email: ${email} has sent you a message.</h2><p>${message}<p>`,
    };

    const emailResult: SentMessageInfo = await mailer.sendMail(emailToSend);

    console.log('emailResult: ', emailResult);

    if (emailResult.rejected) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: 'There was an error sending the email.',
          error: emailResult.response,
        }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent.' }),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'There was an error sending the email.',
        error,
      }),
    };
  }
};

export { handler };
