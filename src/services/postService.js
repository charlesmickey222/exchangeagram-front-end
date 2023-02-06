import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

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
  function addPhotoPost (){
    console.log('made it this far')
  }

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