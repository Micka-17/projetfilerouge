
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import needLogin from '../assets/needlogin.png';
import { Container} from 'react-bootstrap';


function CreatePost() {

  const [posts, setPosts] = useState({ title: "", description: "", imageName: "", file: '' });

  function UploadImage() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    };
  }

  const SubmitPost = function (e) {
    e.preventDefault()

    const formData = new FormData();
    formData.append("title", posts.title)
    formData.append("description", posts.description)
    formData.append("imageName", posts.imageName) // nom de l'image
    formData.append("image", posts.file) // image vers api


    console.log("posts de l'image " + posts.imageName);

    const token = localStorage.getItem('token');

    try {
      Axios({
        method: "post",
        url: "http://localhost:3001/api/posts/post",
        data: formData,
        headers: {
          Authorization: "Bearer " + token
        }
      }).then((response) => {
        window.setTimeout(function () { document.location.reload() }, 5000);
        toast("Votre post a été publié avec succès");
      })
      console.log("voici les data " + formData);
    } catch (e) {
      console.log(e);
      const error28 = (e.response.data.error);
      console.log(error28);
    }
  }
  const token = localStorage.getItem('token');
  return (

    <div className="container ">
      <h1 className='p-5'>Partagez vos ressources !</h1>
      {token ? (
        <div className='post'>
          <div className='mb-3 pb-3 px-2 d-flex justify-content-between'>
            <form  onSubmit={SubmitPost}>
              <div>
                <label htmlFor='title' className='bold'>Titre </label>   
                </div>
                <input type='text' id='title' onChange={(e) => setPosts({ ...posts, title: e.target.value })} value={posts.title} />
              <div>
                <label htmlFor='description' className='bold pt-3'>Description </label>
                </div>
                <textarea
                  name='description'
                  rows='6'
                  cols='90'
                  id='description'
                  onChange={(e) => setPosts({ ...posts, description: e.target.value })}
                  value={posts.description}></textarea>
              <div>
                <label htmlFor="file-upload" className="custom-file-upload"> </label>
                <input accept="image/*" type="file" id="image" name="image" className="form-control img-fluid image" required onChange={e => setPosts({ ...posts, imageName: e.target.name, file: e.target.files[0] })} value={posts.image} />
              </div>
              {/* <a href=''>
                <FontAwesomeIcon icon={faImage} className='icon_post' />
              </a>{' '} */}
              <div className='form-group d-flex align-items-center'>
                <button type='submit' className='btn btn-warning float-right mt-4'>
                  Publier
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      ) : (
        <Container>
              <p className="h4 mt-5 text-center">Vous devez être connecté pour poster un message.</p>
              <img src={needLogin} alt="Illustration de connection" className="mx-auto d-block"/>
        </Container>
      )}
      {/* Affficher les post */}
    </div>
  );
}

export default CreatePost