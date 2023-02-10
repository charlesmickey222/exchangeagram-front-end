import * as tokenService from './tokenService'

const BASE_URL = process.env.REACT_APP_BACK_END_SERVER_URL

async function getAllProfiles() {
  const res = await fetch(`${BASE_URL}/api/profiles`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function fetchProfile(targetID) {
  const res = await fetch(`${BASE_URL}/api/profiles/${targetID}`, {
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

async function addLikedPost(profileId, likedPost) {
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/add-like/${likedPost}`,{
    method : 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function removeLikedPost(profileId, likedPost) {
  const res = await fetch(`${BASE_URL}/api/profiles/${profileId}/add-like/${likedPost}`,{
    method : 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

export {
  getAllProfiles,
  fetchProfile,
  addPhoto,
  addLikedPost,
  removeLikedPost,
}
