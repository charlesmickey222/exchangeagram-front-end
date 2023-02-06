import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`
//Helper Function
async function addPhotoPost (photoData, profileId){
  console.log(photoData)
  console.log(profileId)
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

const createPost = async (user, photo) => {
      console.log(photo)
      try {
        const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${tokenService.getToken()}` ,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        if (photo) {
          const photoData = new FormData()
          photoData.append('photo', photo)
          return await addPhotoPost(
            photoData,
            tokenService.getUserFromToken().profile
          )
        }
        
        return res.json()
      } catch (error) {
        console.error(error)
      }
}

export {
  index,
  createPost as create,
}