import React, { Component } from 'react'
import LoginControl from "./Logowanie"


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUp: false,
      newUser: null
    }
  }


  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== ""){
        this.setState({
          isSignUp: true,
          newUser: {username: username, password: password1}
        });
      }else{
        alert("Nazwa użytkownika nie może być pusta")
      }
    }
    else{
      alert("Hasła się różnią");
    }
  }


  render() {
   
    return (
      <div>
      {
        this.state.isSignUp ?
        <LoginControl newUser={this.state.newUser}/>
        :
        <div className="main_box--main--signUp">
          <input type="text" id="signUpUsername" className="form-control" placeholder="nazwa użytkownika" autoComplete="false"></input>
          <input type="password" id="signUpPassword1" className="form-control" placeholder="hasło" ></input>
          <input type="password" id="signUpPassword2" className="form-control" placeholder="powtórz hasło" ></input>
          <button className="btn btn-success" onClick={this.NewUser}>Utwórz konto</button>
        </div>  
      }
      </div>
    )
  }
}

export default Signup;