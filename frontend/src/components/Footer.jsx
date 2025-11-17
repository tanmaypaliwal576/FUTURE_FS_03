import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} className="h-10" />
            <h2 className="text-xl font-semibold">Verdant</h2>
          </div>
          <p className="text-sm opacity-80">
            Premium coffee crafted with care and sustainability.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 opacity-80">
            <li>Home</li>
            <li>Menu</li>
            <li>Rewards</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 opacity-80">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 opacity-80">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-12 opacity-70 text-sm">
        © 2025 Verdant Coffee. All rights reserved.
      </p>
    </footer>
  );
}
