import { Routes, Route } from 'react-router-dom'

import './globals.css'
import Signin from './_auth/forms/Signin'
import Signup from './_auth/forms/Signup'
import Home from './_root/pages/Home'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"
import { AllUsers, CreatePost, EditPost, Explore, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages'


const App = () => {
   return (
      <main className='flex h-screen'>
         <Routes>
            <Route element={<AuthLayout />}>
               <Route path='/sign-in' element={<Signin />} />
               <Route path='/sign-up' element={<Signup />} />
            </Route>

            <Route element={<RootLayout />}>
               <Route index element={<Home />} />
               <Route path='/explore' element={<Explore />} />
               <Route path='/saved' element={<Saved />} />
               <Route path='/all-users' element={<AllUsers />} />
               <Route path='/create-post' element={<CreatePost />} />
               <Route path='/update-post/:id' element={<EditPost />} />
               <Route path='/posts/:id' element={<PostDetails />} />
               <Route path='/profile/:id' element={<Profile />} />
               <Route path='/update-profile/:id' element={<UpdateProfile />} />
            </Route>
         </Routes>

         <Toaster />
      </main>
   )
}

export default App