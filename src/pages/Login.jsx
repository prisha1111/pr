import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-80">
        <div className="bg-yellow-50 p-2 rounded-t-lg mb-2">
          <h2 className="text-center text-gray-800 font-medium">Login</h2>
        </div>
        <form action="/login" method="post" className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm text-gray-700">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
            <Link to="/forgot-password" className="absolute right-2 top-9 text-sm text-blue-600 hover:underline">
              Forgot password ?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
          >
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <p className="text-sm">
            Don't have account?{' '}
            <Link to="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;