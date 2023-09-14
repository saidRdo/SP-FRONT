"use client"
import React, {useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import LocaleSwitcher from '@/components/locale-switcher';
import SigninButton from "@/components/AuthComponents/SignInButton/SigninButton";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";


const LoginPage = () => {
  const dictionary = useDictionary();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [DisplayPassword, setDisplayPassword] = useState(false);

  const {data:session}=useSession()

  const handleRefreshErrors = () => {
    const LoginError = document.querySelectorAll('.lblerror')
    LoginError.forEach((p) => {
      p.textContent = '';
    })
  }

  useEffect(() => {
    if (session?.user){
      window.history.back()
    }

  }, []);

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div dir={dictionary.lang == 'ar' ? 'rtl' : 'ltr'} className={"ml-2 mt-2 mb-0 z-10 md:justify-center"}>
          <LocaleSwitcher />
        </div>
        <div dir={dictionary.lang == 'ar' ? 'rtl' : 'ltr'} className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src={`../imgs/logoApp/icons8-smart-parking-1250.png`} alt="SmartParkingLogo" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-5 text-[30px] font-semibold text-gray-700 dark:text-gray-200 text-center">
                {dictionary.LoginPage.LoginTitle}
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">{dictionary.LoginPage.LoginEmailInput}</span>
                <input className="block w-full mt-1 text-sm dark:border-red-900 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                       defaultValue={email}
                       id={"email"}
                       onChange={(e)=>setEmail(e.target.value)}
                       onKeyUp={handleRefreshErrors}
                       placeholder="JaneDoe@example.com" />
                <p className={"lblerror text-red-600 dark:text-red-400"} id={"ErrorEmail"}></p>
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">{dictionary.LoginPage.LoginPasswordInput}</span>
                <input className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                       defaultValue={password}
                       id={"password"}
                       onKeyUp={handleRefreshErrors}
                       onChange={(e)=>setPassword(e.target.value)}
                       placeholder="***************" type={DisplayPassword?"text":"password"} />
                <p className={"lblerror text-red-600 dark:text-red-400"} id={"ErrorPassword"}></p>

              </label>
              <div className={"block mt-4 text-sm items-center"}>
                <input type={"checkbox"} onClick={()=>setDisplayPassword(!DisplayPassword)} id={"DiplayPassword"}/>
                <label htmlFor={"DiplayPassword"} className="ml-2 text-gray-700 dark:text-gray-400"> {dictionary.LoginPage.ShowPassword}</label>
              </div>
              <SigninButton email={email} password={password} />
              <hr className="my-8" />
                <p className="mt-4 cursor-pointer" >
                  <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" href="#">
                {dictionary.LoginPage.ForgotPassword}
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(LoginPage), { ssr: false });