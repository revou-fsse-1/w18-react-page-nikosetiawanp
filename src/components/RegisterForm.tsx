import Input from "./Input";

export default function RegisterForm(props: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleRegisterForm = () => {
    props.setIsShown((isShown) => !isShown);
  };

  return (
    <div className="fixed z-50 top-0 inset-x-0 w-full h-full bg-black/70 ">
      <div className="flex justify-center items-center h-screen">
        {/* white box */}
        <div className="relative bg-white px-12 py-6 rounded-lg max-w-[600px]">
          {/* close button */}
          <button
            onClick={toggleRegisterForm}
            className="absolute top-[-5px] right-2 text-gray-700 text-2xl hover:scale-150 transition-transform"
          >
            ×
          </button>
          {/* title */}
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl text-slate-800">
              Register to Photo Club Member
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Get countless benefit by joining as a member of Photo Club!
            </p>
          </div>
          {/* email input */}
          <Input
            labelFor="email"
            label="Email"
            type="email"
            id="email"
            placeholder="Insert your email"
          />

          {/* first name input */}
          <Input
            labelFor="firstName"
            label="First Name"
            type="text"
            id="firstName"
            placeholder="Insert your first name"
          />

          {/* last name input */}
          <Input
            labelFor="lastName"
            label="Last Name"
            type="text"
            id="lastName"
            placeholder="Insert your last name"
          />

          <button className="bg-green-700 py-1 rounded-lg w-full text-md mt-4 hover:scale-105 transition-transform">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
