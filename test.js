const posts =[];

const user = {
  username:'shailesh',
  lastActivityTime: null
}
function updateLastUserActivityTime() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      user.lastActivityTime = new Date().getTime();
      resolve(user.lastActivityTime);
    },1000)
  })
}

function createPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      posts.push(post);
      resolve();
    },1000)
  })
}

Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime])
  .then(([create,update])=>{
    console.log(create)
  })