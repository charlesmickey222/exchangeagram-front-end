import * as tokenService from './tokenService'

const BASE_URL = process.env.REACT_APP_BACK_END_SERVER_URL

async function createMessage(profileId, messageData){
  try {
    const res = await fetch(`${BASE_URL}/api/messages/${profileId}/messages/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(messageData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function messageList(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/api/messages/${profileId}/messages`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  createMessage,
  messageList
}