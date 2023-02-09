import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function addPhotoPost (photoData, profileId){
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return res.json()
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

const createPost = async (post, photo) => {
      try {
        const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${tokenService.getToken()}` ,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post)
        })
        if (photo) {
          const photoData = new FormData()
          photoData.append('photo', photo)
          const postWithPhoto = await addPhotoPost(
            photoData,
            tokenService.getUserFromToken().profile
          )
          return postWithPhoto
        } else {
          return res.json()
        }
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

const deletePost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

const update = async (postData) => {
  try {
    const res = await fetch(`${BASE_URL}/${postData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export {
  index,
  createPost as create,
  fetchPost,
  createComment,
  deletePost,
  update
}