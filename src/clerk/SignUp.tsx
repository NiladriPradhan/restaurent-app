// src/clerk/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp
        path="/signup"
        routing="path"
        redirectUrl="/"
        signInUrl="/signin"
      />
    </div>
  );
};

export default SignUpPage;
