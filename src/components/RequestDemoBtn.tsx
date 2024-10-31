import React from "react";

function RequestDemoBtn() {
  return (
    <button
      className="mx-auto cursor-pointer rounded-lg bg-foreground px-12 py-4 text-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.1] hover:bg-foreground/85 lg:px-8 lg:text-3xl"
      type="button"
    >
      Request Demo
    </button>
  );
}

export default RequestDemoBtn;
