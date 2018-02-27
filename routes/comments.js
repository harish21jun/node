
module.exports = {
  getComments(req, res) {
    console.log("getComments")
    if(req.params.commentId){
        res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
    }
    else{
    res.status(200).send(req.store.posts[req.params.postId].comments)
  } 
  },
  addComment(req, res) {
    var newComment = req.body
      var comments = req.store.posts[req.params.postId].comments

      commentId = comments.length
      comments.push(newComment)
      res.status(201).send({commentId: commentId})

  },
  updateComment(req, res) {
    req.store.posts[req.params.postId].comments[req.params.commentId]= req.body
    res.status(200).send(req.body)
  },

  removeComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}
