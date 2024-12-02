import { NavLink } from "react-router-dom";
import "./App.css";
import cancelIcon from './assets/images/cancelIcon.svg';

function Login() {
  return (
    <>
      <article className="header__login">
        <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
          <section className="header__login-title-container sm:mx-auto sm:w-full sm:max-w-md">
            <NavLink className={"navLink"} to={"news"}>
              <img
                className="header__cancel-icon"
                src={cancelIcon}
                alt="cancel login icon"
              />
            </NavLink>

            <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
              Sign in to your account
            </h2>

            <div className="mt-2 text-center max-w">
            <NavLink className={ "navLink font-medium text-blue-700 hover:text-blue-900 focus:outline-none focus:underline transition ease-in-out duration-150"} to={"/register"}>
            Or create a new acccount
            </NavLink>   
            </div>
          </section>

          <section className="header__login-form-container mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form>
                <section className="header__login-email-container">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      placeholder="user@example.com"
                      type="email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </section>

                <section className="header__login-password-container mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </section>

                <section className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember"
                      type="checkbox"
                      value="1"
                      className="form-checkbox h-4 w-4 text-indigo-700 transition duration-150 ease-in-out"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm leading-5 text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm leading-5">
                    <a
                      href="#"
                      className="font-medium text-blue-700 hover:text-blue-900 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </section>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="header__register-login-submit-button w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Sign in
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default Login;
