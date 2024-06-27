import React from "react";

function Footer() {
  return (
    <div className="border-t-2 py-4 flex flex-col-reverse md:flex-row items-center justify-between text-sm md:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-base md:text-lg font-semibold">Headshot</span>.
          All rights reserved.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3>Join the snipping community's</h3>
        <p className="text-muted-foreground">Telegram group</p>
      </div>
    </div>
  );
}

export default Footer;
