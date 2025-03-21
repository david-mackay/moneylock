// src/app/api/collect-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email } = body;
    
    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mackaydavid888@gmail.com',
      subject: 'New Waitlist Signup',
      text: `A new user has joined the waitlist with email: ${email}`,
      html: `<p>A new user has joined the waitlist with email: <strong>${email}</strong></p>`,
    });
    
    return NextResponse.json(
      { success: true, message: 'Email submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing email submission:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to process email submission' },
      { status: 500 }
    );
  }
}