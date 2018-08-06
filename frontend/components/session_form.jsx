import React from 'react';
import {Link, withRouter} from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render(){
    const errorsList = this.props.errors.session.map((error) =>
      <li>error</li>
    );
    let link;
    if (this.props.formType === 'login') {
      link = <Link to ='/signup'>Sign Up</Link>;
    }
    else {
      link= <Link to = '/login'>Login</Link>;
    }

    return(
      <div>
        <ul>
          {errorsList}
        </ul>
        {link}
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
        <label>username:
          <input
            type="text"
            onChange={this.update("username")}
            value={this.state.username}
            />
        </label>

        <label>password:
          <input
            type="text"
            onChange={this.update("password")}
            value={this.state.password}
            />
        </label>

        <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
