export default function Footer() {
  return (
    <footer className=" text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
        {/*  Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            SunCart
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted e-commerce store for summer essentials ☀️
          </p>
        </div>

        {/*  Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Contact
          </h3>
          <p className="text-sm">Email: support@suncart.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/*  Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Links
          </h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-orange-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>

      {/*  Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
}