//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="haythem">
    <div className="row justify-content-center">
          <div className="col-md-6">
            <span className="anchor" id="formRegister" />
            <hr className="mb-5" />
            {/* form card register */}
            <div className="card card-outline-secondary">
              <div className="card-header">
                <h3 className="mb-0">Sign Up</h3>
              </div>
              <div className="card-body">
                <form autoComplete="off" className="form" role="form">
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                      className="form-control"
                      id="inputName"
                      placeholder="Full name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3">Email</label>
                    <input
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                      required
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword3">Password</label>
                    <input
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                      required
                      type="password"
                    />
                    <small
                      className="form-text text-muted"
                      id="passwordHelpBlock"
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputVerify3">Verify</label>
                    <input
                      className="form-control"
                      id="inputVerify3"
                      placeholder="Password (again)"
                      required
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-success btn-lg float-right"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
      </div>
      </div>
  );
}

export default App;
