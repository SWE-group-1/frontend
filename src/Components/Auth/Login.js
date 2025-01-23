// src/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with', email, password);
    };

    return (
    <div className="flex items-center justify-center min-h-screen bg-white">
        <div className='flex-col pl-8 items-center justify-center h-fit w-1/2'>
            <img className='ml-14 w-3/4 h-96' src={logo} />
            <h1 className='text-8xl text-center w-3/4 ml-14 flex items-center justify-center text-blue-900 font-bold font-serif'>Personalized Study Planner</h1>
        </div>
        <div className='flex w-1/2 min-h-screen items-center justify-center bg-custom-yellow'>
            <div className='w-full items-center justify-center flex-col p-24'>
                <h1 className='text-blue-900 flex justify-center text-5xl font-bold mb-24'>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <div className="mb-8 w-full">
                            <input
                            type="email"
                            id="email"
                            placeholder='School Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-14 text-xl p-2 w-full text-black border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                            />
                        </div>

                        <div className="mb-8">
                            <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 h-14 text-xl p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Log In
                        </button>
                        
                        <h1 className='items-center justify-center flex mt-8 cursor-pointer hover:text-white'>Forgot Password?</h1>
                        <div className='flex items-center justify-center'>
                        <div className='h-1 w-44 mt-14 bg-white rounded-lg'></div>
                        <h1 className='h-2 mt-14 flex items-center mx-2 text-white'>Or</h1>     
                        <div className='h-1 w-44 mt-14 bg-white rounded-lg'></div>
                        </div>
                        
                        <div className='flex items-center justify-center mt-14'>
                        <h1 className='text-white'>Don't have and account?</h1>
                        <h1 
                            onClick={() => navigate('/register')}
                            className='text-black cursor-pointer hover:text-white'
                            >Sign UP</h1>     
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;