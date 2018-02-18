


module.exports = {


  getPosts(req, res) {
  console.log("getPosts")
  if(req.params.postId){
      res.status(200).send(req.store.posts[req.params.postId])
  }
  else{
  res.status(200).send(req.store.posts)
}

  },



  addPost(req, res) {
    console.log("addPost")
    let post = req.body
    let postId = req.store.posts.length
    req.store.posts.push(post)
    res.status(201).send({postId: postId})
  },

  updatePost(req, res) {
    req.store.posts[req.params.postId] = req.body
    res.status(200).send(req.store.posts[req.params.postId])
  },
  removePost(req, res) {
    req.store.posts.splice(req.params.postId, 1)
    res.status(204).send()
  }
}
