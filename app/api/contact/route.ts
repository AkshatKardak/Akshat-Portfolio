import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kardakakshat@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0f0e0c; color: #cdccca; padding: 32px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 24px; font-weight: 900; color: #f59e0b;">AK</span>
            <span style="font-size: 13px; color: #7a7974; margin-left: 8px;">Portfolio Contact</span>
          </div>

          <h2 style="font-size: 20px; font-weight: 700; color: #ffffff; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px;">
            New message from your portfolio
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #7a7974; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 10px 0; color: #cdccca; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7a7974; font-size: 13px;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #f59e0b; font-size: 14px; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px;">
            <p style="font-size: 13px; color: #7a7974; margin: 0 0 8px 0;">Message</p>
            <p style="font-size: 14px; color: #cdccca; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #5a5957; margin-top: 24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
