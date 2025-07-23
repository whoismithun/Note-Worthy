import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", formData);
      
      // Call the login function from context, which also sets localStorage
      login(res.data.token, formData.email); 

      toast.success("Login successful!");
      
      // Now, navigate after the context state (isAuthenticated) has been updated
      navigate("/"); 

    } catch (err) {
      toast.error(err.response?.data?.msg || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label"><span className="label-text">Password</span></label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                value={formData.password}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="link link-primary">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;