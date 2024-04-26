'use server';

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        };
    }
    // Server-side validation end

    let data;
    try {
    data = await resend.emails.send ({
        from: "Contact Form <@(%*!()%&#&%!%(&(!)@%&!&@resend.dev>", 
        to: "@(%*!()%&#&%!%(&(!)@%&!&@gmail.com",
        subject: "Message from contact form", 
        reply_to: senderEmail as string,
        // specify variable as string so typescript doesn't think it is null
        react: React.createElement(ContactFormEmail, {
            message: message as string, 
            senderEmail: senderEmail as string
        })
        // JSX version: react: <ContactFormEmail message={message} senderEmail={senderEmail} />
    });
} catch (error: unknown) {
    
    return {
        error: getErrorMessage(error)
    }
    }

    return {
        data,
    }   
}