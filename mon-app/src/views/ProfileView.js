
import 'bootstrap/dist/css/bootstrap.min.css';
import {Account, DeletId} from '../components/Profil/Profile'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function  ProfileView() {
    const navigate = useNavigate();
	const userInfo = Account();
	const [clicked, setClicked] = useState(false);
	const [postContent, setPostContent] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const token = localStorage.getItem('token');
	let userId = userInfo.id;
	let posts = [];

	const clickHandler = event => {
    	setClicked(true);
		DeletId(navigate, clicked);
  	};

	async function deletePost(id) {
		try {
			await Axios({
				method: "delete",
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

	useEffect(() => {
		Axios({
			method: "get",
			url: "http://localhost:3001/api/posts",
			headers: {
				Authorization: "Bearer " + token
			}
		}).then((result) => {
			let allPosts = result.data;
			allPosts.forEach(element => {
				if (element.User_Id === userId) {
					posts.push(element)
				}
			}); 
			setPostContent(posts)
			setLoaded(true)
		}).catch((error) => {
				setPostContent([])
				setLoaded(true)
			})
	}, [loaded, token]);

  return (
    <div className="container">
		<div className="row profile">
			<div className="col-md-3">
				<div className="profile-sidebar">

					<div className="profile-userpic">
						<img src="https://static.change.org/profile-img/default-user-profile.svg" className="img-responsive" alt=""/>
					</div>
					<h6 className="Bio text-center">{userInfo.bio}</h6>
					<div className="profile-usertitle">
						<ul>
							<li className="list-group-item">lastname : {userInfo.lastName}</li>
							<li className="list-group-item">firstname : {userInfo.firstName}</li>
							<li className="list-group-item">email : {userInfo.email}</li>
						</ul>					
					</div>
					<div className="card-body text-center">
						<button
							type="button"
							className="btn btn-danger jus"
							onClick={clickHandler}
						>
							Supprimer le compte
						</button>
					</div>
					<div className="profile-userbuttons">
						<button type="button" className="btn btn-success btn-sm">Suivre</button>
						<button type="button" className="btn btn-danger btn-sm">Message</button>
					</div> 
				</div>
			</div>
			<div className="col-md-9">
				<div className="profile-content">
				{postContent && postContent.length >= 1 ?
              (
                  postContent.map(content => {
                      const { id, title, user, date, description, imageUrl } = content
                      return (
                          <div className="post-form" key={title}>
                              <div className="card m-2">
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
                                  <img className="card-image" src={imageUrl} alt="" />
                              </div>
							  <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => deletePost(id)}
                              >
                                  Supprimer
                              </button>
                          </div>
                      )
                  })
              ) : (<p>il n'ya pas encore de post</p>)
          }
				</div>
			</div>
		</div>
		<ToastContainer />
	</div>
  );
}

export default ProfileView;