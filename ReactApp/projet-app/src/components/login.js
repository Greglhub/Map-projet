import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Connexion</h3>
        <div className="mb-3">
          <label>Adresse Mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrer votre email"
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrer votre mot de passe"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Se souvenir de moi
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Connexion
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="sign-up">Pas encore de compte?</a>
        </p>
      </form>
    )
  }
}