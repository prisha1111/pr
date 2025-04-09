import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-80">
        <div className="bg-yellow-50 p-2 rounded-t-lg mb-2">
          <h2 className="text-center text-gray-800 font-medium">Welcome to GrocHop</h2>
          <h3 className="text-center text-gray-800 font-medium">Register</h3>
        </div>
        <form action="/register" method="post" className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>
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
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700">Confirm Password :</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter your confirm password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
          >
            Register
          </button>
        </form>
        <div className="mt-3 text-center">
          <p className="text-sm">
            Already have account?{' '}
            <Link to="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;