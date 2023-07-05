
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEllipsis, faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons'
import book from '../styles/book.jpg';


function  ProfileComponent() {
  return (
    <div className="container">
    <div className="row profile">
		<div className="col-md-3">
			<div className="profile-sidebar">

				<div className="profile-userpic">
					<img src="https://static.change.org/profile-img/default-user-profile.svg" className="img-responsive" alt=""/>
				</div>
                <h6 className="Bio text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel minus nesciunt odit officia. Harum accusantium culpa quo, veniam itaque vel suscipit repudiandae saepe? Ab pariatur autem adipisci facere quam?</h6>
				<div className="profile-usertitle">
					<div className="profile-usertitle-name">
						Marcus Doe
					</div>
					<div className="profile-usertitle-job">
						Developpeur
					</div>
				</div>
	            <div className="profile-userbuttons">
					<button type="button" className="btn btn-success btn-sm">Suivre</button>
					<button type="button" className="btn btn-danger btn-sm">Message</button>
				</div> 
				<div className="profile-usermenu">
					<ul className="nav">
						<li className="active">
							<a href="#">
							<i className="glyphicon glyphicon-home"></i>
							Test1 </a>
						</li>
						<li>
							<a href="#">
							<i className="glyphicon glyphicon-user"></i>
							Réglages </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i className="glyphicon glyphicon-ok"></i>
							Test2 </a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="col-md-9">
            <div className="profile-content">
					<div className="card-header"><bold>John Doe</bold>
					<a href="">
					<FontAwesomeIcon icon={faEllipsisVertical} className="icon_post"/> </a></div>
					<div className="card-body">
						<div className="card-footer text-muted">
							2 days ago
						</div>
						<img src={book} className="App-logo" alt="logo" />
					  <p className="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag
						na aliqua. Ut enim ad minim veniam, quis nos amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
						<FontAwesomeIcon icon={faComment} className="icon_post"/> 38
					</div>
				  </div>
				  <br/>
				  <div className="profile-content">
					<div className="card-header">
					  John Doe <a href=""><FontAwesomeIcon icon={faEllipsisVertical} className="icon"/> </a></div>
				
					<div className="card-body">
						<div className="card-footer text-muted">
							2 days ago
						</div>
						<img src={book} className="App-logo" alt="logo" />
					  <p className="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag
						na aliqua. Ut enim ad minim veniam, quis nos amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
						<FontAwesomeIcon icon={faComment} className="icon_post" /> 38
					</div>
				  </div>
            </div>
		</div>
		<br/>
	</div>
  );
}

export default ProfileComponent;