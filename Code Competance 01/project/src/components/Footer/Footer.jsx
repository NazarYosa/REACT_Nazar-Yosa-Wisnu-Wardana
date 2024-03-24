import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nama Website */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">Nazar.</h3>
            </div>
            {/* Sosial Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex text-slate-50 flex-col">
                <a
                  target="blank"
                  href="https://www.instagram.com/veldomert/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Instagram
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/nazaryosa/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/nazarryosaa"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
            {/* Kontak */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">No. 083159993497</p>
              <p className="text-gray-400">Kabupaten Kebumen</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
