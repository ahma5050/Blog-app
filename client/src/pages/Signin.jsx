import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
const Signin = () => {
  const [formDta, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formDta, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/authRoute/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formDta),
      });
      console.log(res)
      setLoading(false);
      const data = await res.json();
      console.log(data)
      if (data.success === false) return setError(data.message);
      if (res.ok) {
        Navigate("/");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 ">
          <Link to="/Signup" className=" text-4xl font-bold dark:text-white ">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
              Sign's{" "}
            </span>
            In
          </Link>
          <p className="text-sm mt-5">
            this a demo Projects. You can Sign in with Your email and password or
            with google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
            <div>
              <Label value="email" className="text-md" />
              <TextInput
                type="email"
                placeholder="Ahmisha5050@gmail.com"
                id="email"
                className="mt-1 font-semibold"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="password" className="text-md" />
              <TextInput
                type="password"
                placeholder="***********"
                id="password"
                className="mt-1 font-semibold"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3"> Loading...</span>
                </>
              ) : (
                "Sing in"
              )}
            </Button>
            <div className="text-sm flex gap-5 mt-5">
              <span>
                Don.t you have an account ?{" "}
                <Link to="/Signup" className="text-blue-500">
                  Sign up
                </Link>
              </span>
            </div>
             {error && (<Alert className="mt-3 " color="failure" >{error}</Alert>)}
          </form>
        </div>
      </div>
    </div>
  );


    </div>
  )
}

export default Signin