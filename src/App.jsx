import React, { useState } from "react";

export const App = () => {
  const [sent, setSent] = useState(false);

  return sent ? (
    <h1 className="mt-8 text-lg text-center">Form was sent!</h1>
  ) : (
    <>
      <h1 className="mt-8 text-lg text-center">Sample form</h1>
      <section>
        <form
          className="w-full py-8 px-10 bg-gray-800 rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="flex flex-col">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="John..." />

            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Doe..." />

            <label>ID Document</label>
            <input type="text" name="id-document" placeholder="1234" />

            <div className="flex justify-between gap-x-10">
              <div className="flex flex-col w-24">
                <label>Age</label>
                <input type="number" name="age" />
              </div>
              <div className="flex flex-col w-full">
                <label>Birthdate</label>
                <input type="date" name="birthdate" />
              </div>
            </div>

            <label>Suggestions?</label>
            <textarea name="suggestions" rows="5" />

            <button
              className="mt-8 flex-shrink-0 border-transparent border-2 bg-gray-900 text-white hover:bg-black hover:text-gray-300 text-sm p-2 border-gray-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default App;
