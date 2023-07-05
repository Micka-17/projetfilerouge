import "../components/Log/Login.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "../components/Log/Login.js";
import { useNavigate } from "react-router-dom"

function LoginView() {

	let navigate = useNavigate();
	const SumbitLogin = async function(e){
		e.preventDefault();

		const userData = {
			email: document.getElementById('email').value,
			password: document.getElementById('password').value
		};

		Login(userData, navigate);
	}

	return (
		<div className="container">
			<div className="row mt-5 justify-content-center">
				<div className="col-md-6">
					<div className="card p-5 ">
						<h1 className="text-center mb-4">Connectez-vous</h1>
						<form onSubmit={SumbitLogin}>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Adresse email
								</label>
								<input type="email" className="form-control" id="email" />
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Mot de passe
								</label>
								<input type="password" className="form-control" id="password" />
							</div>

							<div className="d-grid gap-2 mt-5 justify-content-center">
								<button
									type="submit"
									className="btn btn-warning btn-register-page">
									Se connecter
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

export default LoginView;
