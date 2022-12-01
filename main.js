'use strict'

function sendEmail(ev) {
  ev.preventDefault()
  const nameEl = document.querySelector('.fullname')
  const phoneEl = document.querySelector('.phone')
  const companyEl = document.querySelector('.company')
  const sentEl = document.querySelector('.sent')

  Email.send({
    SecureToken: '09e66569-b94f-4417-af01-f841cdce0054',
    To: 'zoharnogerker@gmail.com',
    From: 'zoharnogerker@gmail.com',
    Subject: 'שלום זוהר,    הודעה חדשה מהאתר נחיתה',
    Body: `שם: ${nameEl.value} ,    טלפון: ${phoneEl.value},    חברה: ${companyEl.value}`,
  }).then((res) => {
    console.log(res)
    nameEl.value = ''
    phoneEl.value = ''
    companyEl.value = ''

    sentEl.innerText = '🙂 ! נשלח'
  })
}
