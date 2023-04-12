import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {};

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:migueltrader13@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} - My message is: ${formData.message}
    - (${formData.email})`
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-around mx-auto items-center"
    >
      <h3 className="relative md:mt-0 md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just got what you need? {""}
          <span className="decoration-[#F7AB0A] underline">Let's talk!</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify=center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+57 3197395269</p>
          </div>
          <div className="flex items-center space-x-5 justify=center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">migueltrader13@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify=center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Colombia, Bogota</p>
          </div>
        </div>

        <form action="https://formsubmit.co/your@email.com" method="POST" onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full ">
          <div className="flex space-x-2">
            <input {...register('name', {required:true})} className='contactInput w-full' placeholder="What's your name?" type="text" />
            <input {...register('email', {required:true})} className='contactInput w-full' placeholder="What's your email" type="email" />
          </div>

          <input {...register('subject', {required:true})}className='contactInput' placeholder="Email subject" type="text" />

          <textarea {...register('message', {required:true})} placeholder="Type here anything you would like to say to me!" className='contactInput'/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg uppercase">get in touch!</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
