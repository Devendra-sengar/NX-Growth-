import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Target recipient email
const DEFAULT_RECIPIENT = 'contact@nexisparkx.com';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || DEFAULT_RECIPIENT;

async function getTransporter() {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  try {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch {
    return nodemailer.createTransport({
      jsonTransport: true,
    });
  }
}

// 1. API Endpoints
app.post('/api/send-intake', async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      industry,
      needs,
      message,
      source,
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        error: 'Full Name and Corporate Email are required.',
      });
    }

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const needsList = Array.isArray(needs)
      ? needs.join(', ')
      : needs || 'Full Ecosystem Growth Strategy';

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9ff; margin: 0; padding: 24px; color: #0b1c30; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; border: 1px solid #dce9ff; box-shadow: 0 4px 20px rgba(9, 20, 38, 0.06); overflow: hidden; }
    .header { background: #091426; color: #ffffff; padding: 28px 24px; border-bottom: 3px solid #0051d5; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 13px; color: #bcc7de; text-transform: uppercase; letter-spacing: 1px; }
    .badge { display: inline-block; background: #0051d5; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; margin-bottom: 12px; }
    .content { padding: 24px; }
    .section-title { font-size: 14px; font-weight: 700; color: #091426; text-transform: uppercase; letter-spacing: 0.8px; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #e5eeff; padding-bottom: 8px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .info-table td.label { font-weight: 600; color: #45474c; width: 35%; background: #f8f9ff; }
    .info-table td.value { font-weight: 500; color: #091426; }
    .message-box { background: #eff4ff; border-left: 4px solid #0051d5; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-bottom: 20px; }
    .footer { background: #f8f9ff; padding: 16px 24px; text-align: center; font-size: 12px; color: #75777d; border-top: 1px solid #e5eeff; }
    .reply-btn { display: inline-block; background: #0051d5; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 20px; border-radius: 8px; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">New Growth Consultation Lead</span>
      <h1>NX Growth • Strategic Intake</h1>
      <p>A NexisparkX Group Division • Enterprise Telemetry</p>
    </div>
    <div class="content">
      <h2 class="section-title">Client Candidate Profile</h2>
      <table class="info-table">
        <tr><td class="label">Full Name</td><td class="value"><strong>${fullName}</strong></td></tr>
        <tr><td class="label">Company / Org</td><td class="value">${companyName || 'Not specified'}</td></tr>
        <tr><td class="label">Corporate Email</td><td class="value"><a href="mailto:${email}" style="color: #0051d5; text-decoration: none; font-weight: 600;">${email}</a></td></tr>
        <tr><td class="label">Phone</td><td class="value">${phone ? `<a href="tel:${phone}" style="color: #0051d5; text-decoration: none;">${phone}</a>` : 'Not provided'}</td></tr>
        <tr><td class="label">Industry Sector</td><td class="value">${industry || 'Technology / General Enterprise'}</td></tr>
        <tr><td class="label">Strategic Objectives</td><td class="value"><span style="color: #0051d5; font-weight: 600;">${needsList}</span></td></tr>
        <tr><td class="label">Intake Origin / CTA</td><td class="value">${source || 'Primary CTA Button'}</td></tr>
        <tr><td class="label">Timestamp</td><td class="value">${submissionTime} (UTC)</td></tr>
      </table>
      ${message ? `<h2 class="section-title">Scale Target & Revenue Goals</h2><div class="message-box">${message.replace(/\n/g, '<br/>')}</div>` : ''}
      <div style="text-align: center; margin-top: 20px;">
        <a href="mailto:${email}?subject=Re:%20NX%20Growth%20Strategy%20Consultation%20for%20${encodeURIComponent(companyName || fullName)}" class="reply-btn">Direct Reply to ${fullName}</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">This email was automatically generated by NX Growth Platform via Nodemailer engine.</p>
      <p style="margin: 4px 0 0 0;">Intake sent to: <strong>${RECIPIENT_EMAIL}</strong></p>
    </div>
  </div>
</body>
</html>
`;

    const transporter = await getTransporter();

    const mailOptions = {
      from: process.env.SMTP_FROM || `"NX Growth Intake" <contact@nexisparkx.com>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `🎯 New Growth Strategy Lead: ${fullName} (${companyName || 'Executive'})`,
      text: `New Strategy Consultation Intake\n\nFull Name: ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nIndustry: ${industry}\nNeeds: ${needsList}\nSource: ${source}\n\nMessage:\n${message || 'No additional note provided'}\n\nTimestamp: ${submissionTime}`,
      html: htmlEmail,
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);

    return res.status(200).json({
      success: true,
      message: `Strategic intake delivered to ${RECIPIENT_EMAIL} via Nodemailer.`,
      previewUrl: previewUrl || null,
      messageId: info.messageId,
    });
  } catch (err: unknown) {
    const error = err as Error;
    return res.status(500).json({
      success: false,
      error: 'Failed to dispatch email: ' + (error.message || 'Unknown error'),
    });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    recipientEmail: RECIPIENT_EMAIL,
    timestamp: new Date().toISOString(),
  });
});

const potentialDistPaths = [
  path.join(process.cwd(), 'dist'),
  path.join(__dirname, '../dist'),
  path.join(__dirname, 'dist'),
  path.resolve('dist'),
];

const distPath = potentialDistPaths.find((p) => fs.existsSync(p)) || path.join(process.cwd(), 'dist');

console.log('Serving static files from:', distPath);

// 1. Explicitly serve static assets
app.use(
  express.static(distPath, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      } else if (filePath.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  })
);

// 2. SPA Fallback - Only return index.html for non-asset routes!
app.get('*', (req: Request, res: Response) => {
  // If the browser asked for a static asset (.css, .js, .svg, etc.) but it wasn't found,
  // RETURN A 404 INSTEAD OF index.html so the browser doesn't throw a MIME type error!
  if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf)$/i)) {
    return res.status(404).send(`Asset not found at ${path.join(distPath, req.url)}`);
  }

  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Build not found. Did vite build run?');
  }
});

export default app;
