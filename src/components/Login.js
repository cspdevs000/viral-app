import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import './Login.css';

<<<<<<< HEAD
async function loginUser(credentials) {
    return fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    // <div className="login-wrapper">
    //   {<NavigationBar />}

      
    //   <section class="container">
    //   <div class="columns is-multiline">
    //     <div class="column is-8 is-offset-2 register">
    //       <div class="columns">
    //         <div class="column left">
    //           <h1 style={{color: "black"}} class="title is-1">Viral</h1>
    //           <p>An elegant and robust website that answers any questions you have about COVID-19</p>
    //         </div>
    //         <div class="column right has-text-centered">
    //           <h1 style={{color: "black"}} class="title is-4">Log In</h1>
    //           <form onSubmit={handleSubmit}>

    //             <div class="field">
    //               <div class="control">
    //                 <input class="input is-medium" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} required/>
    //               </div>
    //             </div>

    //             <div class="field">
    //                 <div class="control">
    //                     <input class="input is-medium" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
    //                 </div>
    //             </div>
    //             <button class="button is-block is-primary is-fullwidth is-medium" type="submit" onSubmit={handleSubmit} >Submit</button>
    //             <br />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="column is-8 is-offset-2">
    //       <br/>
    //       <nav class="level">
    //         <div class="level-right">
    //           <small class="level-item" >
    //             &copy; Viral Website. All Rights Reserved.
    //           </small>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </section>
    // </div>
    <div className="login-wrapper">
      {<NavigationBar />}
      <h1>Please Log In</h1>
      <form method ="" action = "http://localhost:3001/home" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
=======

class Login extends Component {

  render() {
    return (
      <div>
        {< NavigationBar />}

        <section className="container">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2 register">
              <div className="columns">
                <div className="column left">
                  <h1 style={{ color: "black" }} className="title is-1">Viral</h1>
                  <p>An elegant and robust website that answers any questions you have about COVID-19</p>
                </div>
                <div className="column right has-text-centered">
                  <h1 style={{ color: "black" }} className="title is-4">Log In</h1>
                  <form action="http://localhost:3000/users/login" method="POST">

                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="text" name="email" placeholder="Email" onChange={e => (e.target.value)} required />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="password" name="password" placeholder="Password" onChange={e => (e.target.value)} required />
                      </div>
                    </div>
                    <button className="button is-block is-primary is-fullwidth is-medium" type="submit" >Submit</button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <br />
              <nav className="level">
                <div className="level-right">
                  <small className="level-item" >
                    &copy; Viral Website. All Rights Reserved.
                  </small>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div >
    );
  }
>>>>>>> a0e6a558747facc325fb47bc840754cfa9f633a0
}

export default Login;