
import axios from 'axios';
const url = 'api/posts';

//http://localhost:5000/api/posts

class PostService {

  //get labour stats
  static getPosts(){
     
      return new Promise(async(resolve, reject) => {  // eslint-disable-line

          try {

              const res = await axios.get(url);
              const data = res.data
              resolve(
                  data.map(post=> ({
                      ...post,
                      createdAt: new Date(post.CreatedAt)
                  }))
              );

          } catch(err){
              reject(err);

          }

      })

      //Create posts

      //Delete posts

  }
}

    
  

  export default PostService