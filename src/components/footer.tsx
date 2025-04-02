export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} James Angatia. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}