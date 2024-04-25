'use server';

import { Resend } from "resend";
import { validateString, getErrorMessage } from '@/lib/utils';

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


    try {
    await resend.emails.send ({
        from: "Contact Form <@(%*!()%&#&%!%(&(!)@%&!&@resend.dev>", 
        to: "@(%*!()%&#&%!%(&(!)@%&!&@gmail.com",
        subject: "Message from contact form", 
        reply_to: senderEmail as string,
        text: message as string,
        // specify variable as string so typescript doesn't think it is null
    });
} catch (error: unknown) {
    
    return {
        error: getErrorMessage(error)
    }
    }   
}