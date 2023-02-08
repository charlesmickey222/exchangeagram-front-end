import * as tokenService from './tokenService'

const BASE_URL = process.env.REACT_APP_BACK_END_SERVER_URL

async function getAllProfiles() {
  const res = await fetch(`${BASE_URL}/api/profiles`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}
async function fetchProfile(targetID){
  const res = await fetch(`${BASE_URL}/api/profiles/${targetID}`,{
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function addLikedPost(profileId, likedPost){
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/add-like/${likedPost}`,{
    method : 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}
async function removeLikedPost(profileId, likedPost){
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/add-like/${likedPost}`,{
    method : 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function createMessage(profileId, messageData){
  console.log(profileId, messageData)
  console.log(JSON.stringify(messageData))
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/messages/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(messageData)
  })
  return await res.json()
}

async function messageList(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/messages`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return  res.json()
  } catch (error) {
    console.log(error)
  }
}

export { getAllProfiles, fetchProfile, addPhoto, addLikedPost, removeLikedPost, createMessage, messageList, }
