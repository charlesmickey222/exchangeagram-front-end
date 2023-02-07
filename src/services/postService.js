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
async function fetchPost(postId){
  try{
    const res = await fetch(`${BASE_URL}/${postId}`,{
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return res.json()
  }catch (error){
    console.log(error)
  }
}

async function index(){
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


const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  index,
  createPost as create,

  fetchPost,
  createComment,
}