'use client';

import React, { useEffect, useState } from 'react';
import Tiptap from './Tiptap';
// import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowMessage(true);
    console.log({ name, email, content });

    // const data = {
    //   id: uuidv4(),
    //   content: content,
    // };
    // console.log(data);

    // setName('');
    // setEmail('');
    // setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <div className="text-3xl text-center text-emerald-200 mb-10">
        Next Rich Text Form
      </div>
      <input
        type="text"
        placeholder="Enter name"
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 bg-transparent border-2 border-emerald-200 text-emerald-200 rounded-md mb-6 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Enter email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-transparent border-2 border-emerald-200 text-emerald-200 rounded-md mb-6 focus:outline-none"
      />
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />

      <button
        type="submit"
        className="px-4 bg-emerald-200 text-emerald-900 py-2 rounded-md mt-8 hover:bg-emerald-400"
      >
        Submit
      </button>

      {showMessage && (
        <div className="mt-6 w-full text-emerald-200">
          Form submitted successfully. Please check the log, thank you.
        </div>
      )}
    </form>
  );
};

export default Form;
