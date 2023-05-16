import "./Header.css";
import Image from "next/image";
const Header = (): React.JSX.Element => {
  return (
    <div className="p-4 md:h-88 md:px-8 md:py-5">
      <nav className="rounded border-gray-200 bg-white sm:px-4">
        <div className="flex w-full justify-center">
          <div className="grid w-full max-w-5xl grid-cols-[auto,2fr,auto] items-center justify-start gap-x-5">
            <a data-testid="komon-logo-component" href="/es">
              <span className="logo-container">
                <span className="logo-container__inner">
                  <Image
                    alt="komon"
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27159%27%20height=%2736%27/%3e"
                    className="komon-logo"
                    width={100}
                    height={100}
                  />
                </span>
                <Image
                  alt="Komon Logo Navbar"
                  src="https://storage.googleapis.com/komon-website/logo-komon-dark.svg"
                  className="mx-auto flex-1 rounded-full hover:cursor-pointer"
                  width={100}
                  height={100}
                />
              </span>
            </a>
            <div
              className="relative z-20"
              tabIndex={0}
              role="searchbox"
              data-testid="searchbar-container-component"
            >
              <div
                aria-hidden="true"
                className="hidden w-full cursor-pointer md:block"
              >
                <form data-testid="searchbar-input-component">
                  <label
                    htmlFor="default-search"
                    className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Buscar
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="block w-full py-3 pl-11 pr-4 text-sm text-asphalt">
                      <div className="absolute bottom-0 h-[1px] w-full bg-asphalt"></div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex justify-end md:hidden" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="inline-flex items-center justify-end gap-x-3">
              <div aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-testid="navbar-info"
                  className="h-6 w-6 stroke-asphalt stroke-2 hover:cursor-pointer dark:stroke-white md:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  ></path>
                </svg>
              </div>
              <div className="h-6 w-6 gap-x-6 md:flex md:w-full md:items-center md:justify-end">
                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-testid="navbar-disconnected"
                    className="text-asphalt hover:cursor-pointer dark:text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="all:unset hidden cursor-pointer font-euclid-triangle text-xs font-medium uppercase md:block ">
                  ¿Cómo funciona Komon?
                </span>
                <button
                  type="button"
                  className="hidden cursor-pointer items-center gap-x-2 rounded-lg border-solid border-dark-100 px-10 py-1.5 font-euclid-triangle text-base font-semibold text-dark-100 md:inline-flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-auto text-dark-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:hidden">
          <div className="w-fit pt-2">
            <div
              className="cursor-pointer rounded-md px-2 py-0.5"
              aria-hidden="true"
            >
              <p className="font-euclid-triangle font-medium text-white text-xs">
                ¿Eres artista? ¡Apúntate aquí!
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
