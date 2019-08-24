import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import authWithGoogle from '../redux/actions/auth'

import '../styles/Login.css'

const Login = memo(function Login(props) {
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log('Checking if user has read ToS and DPP');
    dispatch(authWithGoogle());
    navigate(`/dash/`);
  }

  return (
    <div className='login_container'>

      <section className="login_info_container">
        <h1 className='login_title'>Login</h1>
        <div className='login_intro'>
          Before you start your adventure,<br /> enlist here.
      </div>
        <button onClick={() => handleLogin()} className="login_gogl">Connect via Gmail</button>
        <section className="login_acknowledgement">
          By registering, you are agreeing to the <br /><span className="poplink">ToS</span> and <span className="poplink">DPP</span> as mentioned below.
        </section>
        <ul className='login_info'>
          {props.tnc.map((item) => (
            <li className='login_info_item' key={item.id}>
              <aside className='login_info_item_id'>
                {item.id}
              </aside>
              {item.msg}
            </li>
          ))}
        </ul>
        <section className="login_acknowledgement">
          Please read the <span className="poplink">Terms of Service</span> and
          <br /><span className="poplink">Data Privacy Policy</span> carefully before you sign up.
        </section>
      </section>
    </div>
  )
})

Login.propTypes = {
  tnc: PropTypes.arrayOf(PropTypes.object),
}

Login.defaultProps = {
  tnc: [
    { id: '1', msg: 'We have to store your data on our cloud service provider and on your browser.' },
    { id: '2', msg: 'Parts of your user profile data, including identification information (PII) will be shared with recruiters & startups.' },
    { id: '3', msg: 'When you use the platform, your choices and actions will be stored for processing by our AI for personalization' },
    // { id: '4', msg: 'Your data will be evaluated against your peers by deep learning algorithms to find you the best matches and recommendations.' },
    // { id: '5', msg: 'In time you will be able to export your data and see where your data is used or shared.' },
  ]
}

export default Login
