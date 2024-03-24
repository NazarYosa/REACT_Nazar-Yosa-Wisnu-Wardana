import React from "react";

function AboutUs() {
  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center pt-48 pb-28 h-screen">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo euismod, varius nunc vitae, vestibulum nisl. Sed nec sapien
          quam. Duis aliquet ultricies ligula nec facilisis. Cras vel orci
          convallis, lobortis risus ut, feugiat purus. Sed vitae lorem ipsum. In
          gravida leo quis justo vehicula congue. Aenean pharetra, justo nec
          consequat vestibulum, felis lacus varius dolor, ut eleifend enim purus
          at eros.
        </p>
        <img
          className="rounded-lg shadow-lg"
          src="https://source.unsplash.com/random/800x600"
          alt="About Us"
        />
      </div>
    </>
  );
}

export default AboutUs;
