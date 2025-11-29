import logo from "../assets/booksLogo-B7FMCcBu.png";
import ResetForm from "../features/auth/ResetForm";

function ResetPassword() {
  return (
    <div>
      <div className="mb-10">
        <img src={logo} alt="logo" className="w-32 mx-auto" />
      </div>
      <div className="mb-8">
        <p className="text-gray-500">Enter the OTP sent to your email</p>
        <h2 className="text-3xl font-semibold">Reset Your Password</h2>
      </div>
      <ResetForm/>
    </div>
  );
}

export default ResetPassword;
