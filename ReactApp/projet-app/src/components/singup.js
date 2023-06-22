import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Création de compte</h3>
        <div className="mb-3">
          <label>Prénom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrer votre prénom"
          />
        </div>
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" className="form-control" placeholder="Entrer votre nom" />
        </div>
        <div className="mb-3">
          <label>Adresse mail</label>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Connexion
          </button>
        </div>
        <p className="forgot-password text-right">
           <a href="/sign-in">Déjà incrit?</a>
        </p>
      </form>
    )
  }
}