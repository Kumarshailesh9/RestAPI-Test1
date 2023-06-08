function updateLastUserActivityTime(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        user.lastActivityTime = new Date().getTime();
        console.log('User last activity time updated:', user.lastActivityTime);
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Post deleted:', post);
        resolve();
      }, 1500);
    });
  }
  
  function createPost(post) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Post created:', post);
        resolve(post);
      }, 2000);
    });
  }
  
    const user = {
      name: 'Shailesh',
      lastActivityTime: null
    }
  
    const post = 'Hello, world!';
   function updatedlastTime(){
    Promise.all([createPost(post), updateLastUserActivityTime(user)])
      .then(([createdPost, lastActivityTime]) => {
        console.log('All posts:', [createdPost]);
        console.log('Last activity time:', lastActivityTime);
        return deletePost(createdPost);
      })
      .then(() => {
        console.log('New set of posts:', []);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

  updatedlastTime();