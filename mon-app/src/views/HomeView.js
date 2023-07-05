import '../components/Home/Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function HomeView() {

  const [postContent, setPostContent] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const token = localStorage.getItem('token');

  useEffect(() => {
      if (!loaded) {
          Axios({
              method: "get",
              url: "http://localhost:3001/api/posts",
              headers: {
                  Authorization: "Bearer " + token
              }
          }).then((result) => {
                  setPostContent(result.data)
                  setLoaded(true)
              }).catch((error) => {
                  setPostContent([])
                  setLoaded(true)
              })
      }
  }, [loaded, token]);

  async function updatePost(id) {
      try {
          await Axios({
              method: "put",
              url: `http://localhost:3001/api/posts/${id}`,
              headers: {
                  Authorization: "Bearer " + token
              }
          }).then(function (response) {
              document.location.reload();
          })
      } catch (e) {
          const error30 = (e.response.data.error);
          toast(error30);
      }
  }

  return (
    <div className="HomeView">
      <header className="header-banner d-flex justify-content-center align-items-center">
        {token ? null :  <a href='/inscription' className="btn btn-warning btn-register">S'inscrire</a>}
      </header>
      <div className="container text-center">
        <div className="my-4">
          <h1 className="title pt-4">Actualités</h1>
        </div>
        <div className="App d-flex flex-wrap justify-content-around flex-row-reverse">
          {postContent && postContent.length >= 1 ?
              (
                  postContent.map(content => {
                      const { title, user, date, description, imageUrl } = content
                      return (
                          <div className="post-form col-sm-6" key={title}>
                              <div className=" card m-2">
                                  <div className="card-header">
                                      <div className="user">
                                          <bold>{user.firstName}</bold>
                                      </div>
                                      <div className="card-title-group">
                                          <h5 className="card-title">{title}</h5>
                                          <div className="card-date">{date}</div>
                                      </div>
                                  </div>
                                  <div className="card-text">{description}</div>
                                  <img className="card-image img-fluid" src={imageUrl} alt="" />
                              </div>
                          </div>
                      )
                  })
              ) : (<p>Il n'y a pas encore de post</p>)
          }
          <ToastContainer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HomeView;
