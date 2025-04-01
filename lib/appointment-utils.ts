export interface AppointmentData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  appointmentFor: string
  patientAge: string
  serviceType: string
  preferredDate: string
  preferredTime: string[]
  concerns: string
  heardFrom: string
}

export function formatAppointmentForWhatsApp(data: AppointmentData): string {
  return `
*New Appointment Request*

*Personal Information:*
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}, ${data.city}, ${data.state}, ${data.pincode}

*Appointment Details:*
For: ${data.appointmentFor}
Patient Age: ${data.patientAge}
Service: ${data.serviceType}
Date: ${data.preferredDate}
Time: ${data.preferredTime.join(", ")}

*Additional Information:*
Concerns: ${data.concerns}
Heard From: ${data.heardFrom}
`.trim()
}

export function getWhatsAppLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export function formatAppointmentForEmail(data: AppointmentData): string {
  return `
<h2>New Appointment Request</h2>

<h3>Personal Information:</h3>
<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state}, ${data.pincode}</p>

<h3>Appointment Details:</h3>
<p><strong>For:</strong> ${data.appointmentFor}</p>
<p><strong>Patient Age:</strong> ${data.patientAge}</p>
<p><strong>Service:</strong> ${data.serviceType}</p>
<p><strong>Date:</strong> ${data.preferredDate}</p>
<p><strong>Time:</strong> ${data.preferredTime.join(", ")}</p>

<h3>Additional Information:</h3>
<p><strong>Concerns:</strong> ${data.concerns}</p>
<p><strong>Heard From:</strong> ${data.heardFrom}</p>
`.trim()
}

export function sendAppointmentEmail(data: AppointmentData, recipientEmail: string): void {
  // In a real implementation, this would use a server-side API
  // For now, we'll open the default email client
  const subject = encodeURIComponent(`New Appointment Request from ${data.firstName} ${data.lastName}`)
  const body = encodeURIComponent(formatAppointmentForEmail(data).replace(/<[^>]*>/g, ""))
  window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`)
}

