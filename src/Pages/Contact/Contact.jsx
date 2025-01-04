
const Contact = () => {
  return (
    <section>
      <div className="section-container mx-auto">
        <h4 className="text-center font-bold mb-2">Get In <span className="text-teal-500">Touch</span></h4>
        <h2 className="text-center text-4xl font-bold">Contact Me</h2>
        <hr className="mt-5 w-9/12 mx-auto" />
        <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
          {/* contact form */}
            <form action="" className="grid grid-cols-1 md:grid-cols-2 grid-rows-7 gap-5 flex-1 w-full">
              <input type="text" className="col-span-1 row-span-1 py-5 pl-5 rounded-md bg-black w-full" placeholder="Your name" />
              <input type="text" className="col-span-1 row-span-1 py-5 pl-5 rounded-md bg-black w-full" placeholder="Your email" />
              <textarea className="textarea col-span-1 md:col-span-2 row-span-3 md:row-span-4 bg-black"
                placeholder="Put your message here.."></textarea>
              <button
                className="btn bg-emerald-600 text-white font-semibold border-none col-span-1 md:col-span-2 w-full md:w-fit mx-auto mt-6">Send
                your message
              </button>
            </form>
          {/* Contact info */}
          <div className="flex-1 grid md:grid-cols-2 lg:block gap-5">
            <div className="p-3 mb-4 bg-gradient-to-tr from-emerald-600 to-cyan-600 rounded-lg">
              Location: Sylhet, Bangladesh
            </div>
            <div className="p-3 mb-4 bg-gradient-to-tr from-emerald-600 to-cyan-600 rounded-lg">
              Email: wadsahinalom@gmail.com
            </div>
            <div className="p-3 mb-4 bg-gradient-to-tr from-emerald-600 to-cyan-600 rounded-lg">
              Phone: +880 1701481767
            </div>
            <div className="p-3 mb-4 bg-gradient-to-tr from-emerald-600 to-cyan-600 rounded-lg">
              WhatsApp: +880 1849834372
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;