import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agree?: boolean;
}

const DEFAULT_RECIPIENT = 'selvapatinyo@gmail.com';
const DEFAULT_FROM = 'Selva Terapia <contacto@selvaterapia.com>';

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, message, agree } = body;

    // Server-side Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!agree) {
      return NextResponse.json({ error: 'Privacy policy agreement is required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
        { status: 503 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;
    const fromAddress = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedPhone = phone.trim();
    const sanitizedMessage = message.trim();

    const emailSubject = `Nuevo mensaje de contacto: ${sanitizedName}`;
    const textContent = `Has recibido un nuevo mensaje desde el formulario web de Selva Terapia:

Nombre: ${sanitizedName}
Email: ${sanitizedEmail}
Teléfono: ${sanitizedPhone}

Mensaje:
${sanitizedMessage}
`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; color: #333;">
        <h2 style="color: #50956D; margin-top: 0;">Nuevo mensaje de contacto</h2>
        <p style="font-size: 15px; line-height: 1.5;">Has recibido un nuevo mensaje a través del sitio web <strong>Selva Terapia</strong>:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #555;">Nombre:</td>
            <td style="padding: 8px 0;">${escapeHtml(sanitizedName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(sanitizedEmail)}" style="color: #50956D;">${escapeHtml(sanitizedEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td>
            <td style="padding: 8px 0;"><a href="tel:${escapeHtml(sanitizedPhone)}" style="color: #50956D;">${escapeHtml(sanitizedPhone)}</a></td>
          </tr>
        </table>

        <div style="background-color: #f9f9f9; border-left: 4px solid #50956D; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <h4 style="margin-top: 0; color: #50956D; margin-bottom: 8px;">Mensaje:</h4>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(sanitizedMessage)}</p>
        </div>

        <p style="font-size: 13px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
          Puedes responder directamente a este correo para comunicarte con <strong>${escapeHtml(sanitizedName)}</strong> (${escapeHtml(sanitizedEmail)}).
        </p>
      </div>
    `;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      replyTo: sanitizedEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent
    });

    if (error) {
      console.error('Resend SDK error:', error);
      return NextResponse.json(
        { error: error.message || 'Error al enviar el correo a través de Resend' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
