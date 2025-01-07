import { useState, useEffect } from 'react';
import StandardLayout from '../../../Layout/StandardLayout.jsx';
import { ThemeIcon } from '../../../assets/SVGImage/Header/Profile.jsx';

function Theme() {
  const [storedTheme, setStoredTheme] = useState('light');

  useEffect(() => {
    // Apply theme to body background
    if (storedTheme === 'dark') {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [storedTheme]);

  const handleThemeChange = (theme) => {
    setStoredTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <>
      <StandardLayout>
        <div className={`p-4 m-5 border border-blue-400 w-screen ${storedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex gap-4"><span><ThemeIcon /></span>
            <h2 className="text-xl font-semibold mb-4">Themes</h2>
          </div>

          <div className={`space-y-4 border border-red-400 p-5 ${storedTheme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex justify-between">
              <h3 className="text-lg font-medium mb-2">Default Theme</h3>

              <div className="flex gap-4">
                <label className="relative inline-flex cursor-pointer items-center">

                  <button 
                    onClick={() => handleThemeChange(storedTheme === 'light' ? 'dark' : 'light')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                      storedTheme === 'dark' 
                        ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {storedTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <svg 
                      className={`w-4 h-4 ${storedTheme === 'light' ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      {storedTheme === 'light' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      )}
                    </svg>
                  </button>
                  
                </label>
              </div>

            </div>
          </div>
        </div>
      </StandardLayout>
    </>
  );
}

export default Theme;
