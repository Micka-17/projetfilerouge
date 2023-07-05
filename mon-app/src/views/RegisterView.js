import "../components/Register/Register.css";
import {React, useState} from "react";
import {Register} from "../components/Register/Register.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"


function RegisterView() {
	let navigate = useNavigate();

	const [userFirstName, setuserFirstName] = useState("");
	const [userLastName, setuserLastName] = useState("");
	const [userEmail, setuserEmail] = useState("");
	const [userpassword, setUserpassword] = useState("");
	
	const submitHandler = async function(e){
     e.preventDefault();

	 const userData = {
		firstName: userFirstName,
		lastName: userLastName,
		email: userEmail,
		password: userpassword
	};

	 Register(userData, navigate);
	} 
	return (
		<div className="container">
			<div className="row mt-5 justify-content-center">
				<div className="col-md-6">
					<div className="card p-5 ">
						<h1 className="text-center mb-4">Créez votre compte</h1>
						<form onSubmit={submitHandler}>
							<div className="mb-3">
								<label htmlFor="firstName" className="form-label " >
									Prénom
								</label>
								<input type="text" name="firstName" id="firstName" className="form-control" required onChange={e => setuserFirstName(e.target.value)} value={userFirstName} />
							</div>
							<div className="mb-3">
								<label htmlFor="lastName" className="form-label">
									Nom
								</label>
								<input type="text" className="form-control" id="lastName"  required onChange={e => setuserLastName(e.target.value)} value={userLastName} />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Adresse email
								</label>
								<input type="email" className="form-control" id="email"  onChange={e => setuserEmail(e.target.value)} value={userEmail} />
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Mot de passe
								</label>
								<input type="password" className="form-control" id="password" onChange={e => setUserpassword(e.target.value)} value={userpassword} />
							</div>

							<div className="d-grid gap-2 mt-5 justify-content-center">
								<button
									type="submit"
									className="btn btn-warning btn-register-page">
									S'inscrire
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default RegisterView;
