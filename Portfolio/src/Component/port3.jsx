let Port3 = () => {
  return (
    <>
      <div className="  h-screen bg-black">
        <div className=" flex">
          <div className=" text-white pt-16 pl-14 border-red-50 ">
            <div className=" flex justify-center">
              <p className=" text-2xl hover:border-b-2"> Get in touch </p>
            </div>


            <div className=" flex justify-between w-screen">
   <div className=" ml-20">
              <p className=" text-2xl text-orange-500 hover:font-serif ">
                Let's talk
              </p>
              <p className=" mt-3 font-mono hover:text-blue-800">
                I'm currwntly available to take on new projects,so feel free to
                send
              </p>
              <p className=" hover:font-serif hover:text-green-400">
                me a massage about anuthing that you want me to work on .You can
              </p>
              <p className=" hover:text-blue-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                contact any time.
              </p>
              <div className=" flex space-x-6 mt-6">
                <div className="">
                  <p className="">
                    {" "}
                    <img
                      className=" h-6 w-10"
                      src="https://th.bing.com/th/id/OIP.F3uwiPWsrsUR7iMVXZ9VVgHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                  </p>
                  <p className="mt-2">
                    {" "}
                    <img
                      className=" h-6 w-10 animate-pulse"
                      src="https://th.bing.com/th/id/OIP.7ikxqrud1_mK94lv-hFZTwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                    />
                  </p>
                  <p className="mt-2">
                    <img
                      className="  h-6 w-10"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </p>
                </div>
                <div className=" space-x-2">
                  <p className=" animate-spin hover:animate-none hover:text-yellow-200">
                    greatstockdev@gmail.com
                  </p>
                  <p className="mt-2">+772-825-524</p>
                  <p className="mt-2 animate-bounce hover:animate-none hover:text-slate-600">
                    CA, United State
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className=" mr-32">
                <p>Your Name</p>
                <input
                  className="mt-3 h-10 min-w-96 border bg-slate-600"
                  placeholder="Enter your name"
                  type="text"
                />
                <p className="mt-3">Your Email</p>
                <input
                  className="mt-3 h-10 min-w-96 border bg-slate-600 text-orange-950"
                  placeholder="Enter your email"
                  type="text"
                />
                <p className="mt-3">Write your message here</p>
                <textarea
                  className="mt-3 h-52 min-w-96 border bg-slate-500 text-black"
                  placeholder="Enter your messege"
                  name=" "
                  id=""
                ></textarea>
                <div className="mt-11">
                  <button className="border hover:bg-orange-700 hover:text-blue-900 hover:rounded-lg select-none hover:h-11">
                    Submit now
                  </button>
                </div>
              </div>
            </div>

            </div>

         
          </div>
        </div>
      </div>
    </>
  );
};
export default Port3;
