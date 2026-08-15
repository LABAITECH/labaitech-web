import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL || "contato@labai-tech.com";
const fromEmail = process.env.RESEND_FROM || "LabAI Tech <onboarding@resend.dev>";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        {
          message:
            "A configuração do e-mail ainda não foi ativada. Defina a variável RESEND_API_KEY.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { nome, sobrenome, email, motivo, mensagem } = body;

    if (!nome || !sobrenome || !email || !motivo || !mensagem) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const nomeCompleto = `${nome} ${sobrenome}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 700px; margin: 0 auto;">
        <div style="background: #5B36D6; color: white; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h2 style="margin: 0; font-size: 24px;">Nova mensagem do site</h2>
        </div>

        <div style="padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; background: #ffffff;">
          <p style="margin: 0 0 16px; font-size: 16px;">
            Você recebeu uma mensagem diretamente do site da LabAI Tech.
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 170px; color: #374151;">Nome:</td>
              <td style="padding: 8px 0; color: #111827;">${nomeCompleto}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-mail:</td>
              <td style="padding: 8px 0; color: #111827;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Motivo:</td>
              <td style="padding: 8px 0; color: #111827;">${motivo}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #374151;">Mensagem:</p>
            <div style="padding: 18px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; color: #111827; white-space: pre-line;">
              ${mensagem}
            </div>
          </div>

          <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">
            Esta mensagem foi enviada através do formulário de contato do site.
          </div>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `Novo contato do site - ${nomeCompleto}`,
      html: emailHtml,
      replyTo: email,
    });

    if (result.error) {
      throw new Error(result.error.message || "Erro ao enviar e-mail.");
    }

    return NextResponse.json({
      message: "Mensagem enviada com sucesso.",
      ok: true,
    });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar a mensagem no momento.",
      },
      { status: 500 }
    );
  }
}
