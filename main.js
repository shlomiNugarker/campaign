'use strict'

function sendEmail(ev) {
  // ev.preventDefault()

  Email.send({
    SecureToken: '09e66569-b94f-4417-af01-f841cdce0054',
    To: 'zoharnogerker@gmail.com',
    From: 'zoharnogerker@gmail.com',
    Subject: 'שלום זוהר, הודעה חדשה מהאתר נחיתה',
    Body: 'מה נישמע זה אני מהאתר נרשמתי',
  }).then((message) => alert(message))
}
