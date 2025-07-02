// src/clerk/SignIn.jsx
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        path="/signin"
        routing="path"
        redirectUrl="/"
        signUpUrl="/signup" // 👈 allows new users to sign up
      />
    </div>
  );
};

export default SignInPage;
