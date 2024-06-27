import React from "react";

function Footer() {
  return (
    <div>
      <div>Footer</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <hr className="my-4 border-primary" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Headshot</span>. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
