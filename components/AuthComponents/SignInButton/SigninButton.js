"use client"
import React, {useState} from "react";
import {signIn,  useSession} from "next-auth/react";
import {Ring} from "@uiball/loaders";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {useRouter} from "next/navigation";
import {Button} from "react-bootstrap";


const SigninButton = ({email,password}) => {
    const dictionary = useDictionary();
    const {session}=useSession()
    const [loading, setloading] = useState(false);
    const router=useRouter()

    const ouSubmit= async (e)=>{
        e.preventDefault();
        setloading(true)

        if (!email || email) {
            const ErrorEmail = document.querySelector('#ErrorEmail')
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const inputemail = document.querySelector('#email')
            if (!email) {
                ErrorEmail.textContent =  `${dictionary.LoginPage.EmailErrors.RequiredField}`;
                setloading(false)
                return inputemail.style.border = '1px solid red';
            } else if (!mailformat.test(email)) {
                setloading(false)
                return ErrorEmail.textContent = `${dictionary.LoginPage.EmailErrors.InvalidEmail}`;
            }
        }
        if (!password || password?.length < 8) {
            const Errorpassword = document.querySelector('#ErrorPassword')
            const inputpassword = document.querySelector('#password')
            if (!password) {
                inputpassword.style.border = '1px solid red';
                setloading(false)
                return Errorpassword.textContent = `${dictionary.LoginPage.PasswordErrors.RequiredField}`;
            } else if (password?.length < 8) {
                setloading(false)
                return Errorpassword.textContent = `${dictionary.LoginPage.PasswordErrors.InvalidPassword}`;
            }
        }
/*
          signIn("credentials",{
                email:email,
                password:password,
                redirect:false
            }).then(collback=>{

                setloading(false)
                // console.log(collback)

              if (collback.error){
                  document.querySelector('#password').value=""
                  document.querySelector('#ErrorEmail').textContent=`${dictionary.LoginPage.BadCredentials}`;
              }
              if (collback.ok && !collback.error){
                  router.push("/dashboard")
                  console.log("success")
              }
          }).catch(error=>console.log(error))*/



    }

    return(
        <Button variant="primary" type="submit" className={"text-white"} onClick={(e)=>ouSubmit(e)}>
            {
                !loading ?
                    dictionary.LoginPage.LoginButton :
                    <svg
                        className="ring"
                        viewBox="25 25 50 50"
                        stroke-width="5"
                    >
                        <circle cx="50" cy="50" r="20" />
                    </svg>
            }</Button>
    )
}
export default SigninButton;
