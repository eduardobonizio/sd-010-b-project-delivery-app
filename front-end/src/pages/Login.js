import React, { useState, useEffect } from 'react';
import Aos from 'aos';

import RegisterForms from '../components/registerForms';
import 'aos/dist/aos.css';

import LoginForms from '../components/loginForms';

export default function Login() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <nav className="fixed z-20 w-full bg-white shadow-md">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <img className="cursor-pointer w-52" src="/logo.svg" alt="Imagem da logo" />
          </div>
        </div>
      </nav>
      <div
        className="flex flex-col items-center justify-center invisible w-full
      h-0 min-h-screen pt-20 px-10 md:visible md:h-full"
      >
        <div className="flex items-center space-x-4">
          <div className="pr-8" data-aos="fade-right">
            <img
              className="animate-bounce w-full"
              src="/tampa.svg"
              alt="Imagem de uma tampa"
            />
            <img className="w-full" src="/login.svg" alt="Imagem da login" />
          </div>
          { isLogin
            ? <LoginForms registerFunc={ setIsLogin } />
            : <RegisterForms registerFunc={ setIsLogin } />}
        </div>
      </div>
    </div>
  );
}
