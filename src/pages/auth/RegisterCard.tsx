const RegisterCard = () => {
  return (
    <div className="w-full h-[94vh] flex items-center justify-center flex-col">
      <div className=" p-4 border rounded-md flex flex-col items-center transition-all duration-300 w-[90%] md:w-[600px]">
        {" "}
        <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
          HMO
        </div>
        <div className="text-[26px] font-bold mb-3">Account Verification</div>
        <div className=" -mt-4">A mail has been sent to you...</div>
        <br />
        <div className="w-[97%] border-b " />
        <br />
        <p className="mt-1 w-[90%] text-[13px] font-[400]">
          You are seeing this message because you've created an account with us.
          Please go check your email, there you'd see a verification link and
          your Family login token code... Click on the Link to verify your
          Account and Login to get start benefiting from this awesome platform!{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
