'use server'
import React from "react"
import { Resend } from "resend"
import { getErrorMessage,validateString } from "@/lib/utils"
import ContactFormEmail from "@/components/ContactFormEmail"

const resend = new Resend(process.env.RESENT_API_KEY)

export const sendEmail = async (formData) => {

  const message = formData.get("message")
  const senderEmail = formData.get("senderEmail")

 if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data
  try{
      data = resend.emails.send({
      from:"Contact Form <onboarding@resend.dev>",
      to:"i4irfan777@gmail.com",
      subject:"Contact Form - mohamedirfan.tech",
      reply_to:senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  }
  catch(error){
    return {
      error:getErrorMessage(error)
    }
  }
  return{
    data
  }
}