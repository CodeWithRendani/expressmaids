// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"ExpressMaids Website" <${process.env.SMTP_USER}>`,
//       to: ["info@expressmaids.co.za", "vicky@expressmaids.co.za"],
//       subject: `New Contact Form Message from ${name}`,
//       html: `
//         <h3>New Message from ExpressMaids Website</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const {
      customerType, // "individual" | "company"
      service,
      name,
      surname,
      phone,
      email,
      address,
      notes,
      companyName,
      companyReg,
      vatNumber,
      contactPerson,
      industry,
    } = data;

    await transporter.sendMail({
      from: `"ExpressMaids Website" <${process.env.SMTP_USER}>`,
      to: ["info@expressmaids.co.za", "vicky@expressmaids.co.za"],
      subject: `New Quote Request (${customerType}) - ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Customer Type:</strong> ${customerType}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <hr/>

        ${
          customerType === "company"
            ? `
              <h3>Company Details</h3>
              <p><strong>Company Name:</strong> ${companyName || "-"}</p>
              <p><strong>Company Reg No:</strong> ${companyReg || "-"}</p>
              <p><strong>VAT No:</strong> ${vatNumber || "-"}</p>
              <p><strong>Industry:</strong> ${industry || "-"}</p>
              <p><strong>Contact Person:</strong> ${contactPerson || "-"}</p>
            `
            : `
              <h3>Individual Details</h3>
              <p><strong>Name:</strong> ${name || "-"}</p>
              <p><strong>Surname:</strong> ${surname || "-"}</p>
            `
        }

        <hr/>
        <h3>Contact</h3>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Address:</strong> ${address || "-"}</p>

        <hr/>
        <h3>Notes</h3>
        <p>${(notes || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
