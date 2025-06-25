import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  function toggleNavDropdown() {
    const a = document.getElementsByClassName("nav-dropdown")[0];
    const b = window.getComputedStyle(a).display;
    if (b === "flex") {
      a.style.display = "none";
      a.style.flexDirection = "";
      a.style.width = "";
    } else {
      a.style.display = "flex";
      a.style.flexDirection = "column";
      a.style.width = "100vw";
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        const a = document.getElementsByClassName("nav-dropdown")[0];
        if (a) {
          a.style.display = "none";
          a.style.flexDirection = "";
          a.style.width = "";
        }
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav bg-light">
      <div className="nav-logo">
        <img className="nav-logo-img" src="/sampleLogo.jpg" alt="logo" />
      </div>
      <button
        onClick={toggleNavDropdown}
        className="btn btn-warning nav-dropdown-btn"
      >
        <img className="nav-dropdown-img" src="/menu.svg" alt="" />
      </button>
      <div className="bg-warning nav-dropdown">
        <Link style={{ margin: "20px auto 10px auto" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "10px auto" }} to="/about">
          About us
        </Link>
        <Link style={{ margin: "10px auto" }} to="/products">
          Products
        </Link>
        <Link style={{ margin: "10px auto 20px auto" }} to="/contact">
          Contact us
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
}
