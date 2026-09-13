import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const productService = String(
      formData.get("productService") || ""
    ).trim();
    const requirement = String(
      formData.get("requirement") || ""
    ).trim();
    const message = String(
      formData.get("message") || ""
    ).trim();

    // Required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const recipient = process.env.ZEAL_CONTACT_EMAIL;

    if (!recipient) {
      console.error("ZEAL_CONTACT_EMAIL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Zeal Website <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `New Website Enquiry — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Zeal Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f5f3ed;
              font-family: Arial, Helvetica, sans-serif;
              color: #171714;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #ffffff;
                border: 1px solid #e5e1d8;
              "
            >

              <!-- Header -->
              <div
                style="
                  padding: 28px 32px;
                  background: #11110f;
                  color: #ffffff;
                "
              >
                <div
                  style="
                    font-size: 22px;
                    font-weight: 700;
                    letter-spacing: 3px;
                  "
                >
                  ZE<span style="color: #e8c85a;">A</span>L
                </div>

                <div
                  style="
                    margin-top: 8px;
                    font-size: 11px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.5);
                  "
                >
                  New Website Enquiry
                </div>
              </div>

              <!-- Content -->
              <div style="padding: 32px;">

                <h2
                  style="
                    margin: 0 0 24px;
                    font-size: 24px;
                    color: #171714;
                  "
                >
                  New enquiry received
                </h2>

                <!-- Contact Details -->
                <div
                  style="
                    border-top: 1px solid #e5e1d8;
                    border-bottom: 1px solid #e5e1d8;
                  "
                >

                  <div style="padding: 14px 0; border-bottom: 1px solid #eee;">
                    <strong>Name</strong>
                    <div style="margin-top: 5px; color: #666;">
                      ${escapeHtml(name)}
                    </div>
                  </div>

                  ${
                    company
                      ? `
                    <div style="padding: 14px 0; border-bottom: 1px solid #eee;">
                      <strong>Company</strong>
                      <div style="margin-top: 5px; color: #666;">
                        ${escapeHtml(company)}
                      </div>
                    </div>
                  `
                      : ""
                  }

                  <div style="padding: 14px 0; border-bottom: 1px solid #eee;">
                    <strong>Email</strong>
                    <div style="margin-top: 5px; color: #666;">
                      ${escapeHtml(email)}
                    </div>
                  </div>

                  <div style="padding: 14px 0; border-bottom: 1px solid #eee;">
                    <strong>Phone</strong>
                    <div style="margin-top: 5px; color: #666;">
                      ${escapeHtml(phone)}
                    </div>
                  </div>

                  ${
                    country
                      ? `
                    <div style="padding: 14px 0; border-bottom: 1px solid #eee;">
                      <strong>Country</strong>
                      <div style="margin-top: 5px; color: #666;">
                        ${escapeHtml(country)}
                      </div>
                    </div>
                  `
                      : ""
                  }

                  ${
                    productService
                      ? `
                    <div style="padding: 14px 0;">
                      <strong>Product / Service</strong>
                      <div style="margin-top: 5px; color: #666;">
                        ${escapeHtml(productService)}
                      </div>
                    </div>
                  `
                      : ""
                  }

                </div>

                <!-- Requirement -->
                ${
                  requirement
                    ? `
                  <div style="margin-top: 28px;">
                    <div
                      style="
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: #b18a18;
                      "
                    >
                      Requirement
                    </div>

                    <p
                      style="
                        margin: 10px 0 0;
                        line-height: 1.7;
                        color: #555;
                      "
                    >
                      ${escapeHtml(requirement)}
                    </p>
                  </div>
                `
                    : ""
                }

                <!-- Message -->
                <div style="margin-top: 28px;">

                  <div
                    style="
                      font-size: 12px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      color: #b18a18;
                    "
                  >
                    Message
                  </div>

                  <div
                    style="
                      margin-top: 10px;
                      padding: 18px;
                      background: #f7f6f2;
                      line-height: 1.7;
                      color: #555;
                    "
                  >
                    ${escapeHtml(message).replace(/\n/g, "<br />")}
                  </div>

                </div>

                <!-- Reply -->
                <div
                  style="
                    margin-top: 30px;
                    padding: 16px;
                    background: #11110f;
                    color: rgba(255,255,255,0.7);
                    font-size: 13px;
                    line-height: 1.6;
                  "
                >
                  Reply directly to this email to respond to
                  <strong style="color: #ffffff;">
                    ${escapeHtml(name)}
                  </strong>.
                </div>

              </div>

              <!-- Footer -->
              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #e5e1d8;
                  font-size: 11px;
                  color: #999;
                "
              >
                This enquiry was submitted through the Zeal website.
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}