import { Outlet, Navigate } from "react-router-dom"
import sideimg from '../../public/assets/images/side-img.svg'

const AuthLayout = () => {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <div className="w-screen flex flex-row bg-black">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img 
            src={sideimg}
            alt="logo"
            className="hidden xl:block h-screen p-4 w-1/2 object-contain bg-no-repeat"
          />
        </div>
      )}
    </>
  )
}

export default AuthLayout