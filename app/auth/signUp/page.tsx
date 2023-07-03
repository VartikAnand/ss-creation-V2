'use client'
import React, { useState } from 'react';

const SignUp = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <section className="relative flex justify-center items-center h-screen w-full">
      <div className="min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">
            <div className="p-5 bg-white rounded-lg flex flex-col items-center justify-between space-y-8">
              <div className="h-80 w-96 rounded-lg bg-gray-200 p-8">
                <div className="mb-4 text-3xl font-semibold text-center">{isRegistering ? 'Registration' : 'Login'}</div>
                <form onSubmit={handleSubmit}>
                  {isRegistering && (
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  {isRegistering && (
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                      />
                    </div>
                  )}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    {isRegistering ? 'Sign Up' : 'Log In'}
                  </button>
                  {isRegistering ? (
                    <button
                      className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                      type="button"
                    >
                      Sign Up with Google
                    </button>
                  ) : null}
                </form>
              </div>
              <div className="flex justify-center w-full">
                <button className="flex text-blue-500 hover:text-blue-800 font-bold" onClick={handleToggleForm}>
                  {isRegistering ? 'Log In instead' : 'Create an account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
