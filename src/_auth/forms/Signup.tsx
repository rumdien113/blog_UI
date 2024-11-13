import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { Link } from "react-router-dom"

import logo from '../../../public/assets/images/logo.svg'
import Loader from "@/components/shared/Loader"

const Signup = () => {
  const isLoading = false
  const { toast } = useToast()

// 1. Define your form.
const form = useForm<z.infer<typeof SignupValidation>>({
  resolver: zodResolver(SignupValidation),
  defaultValues: {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  },
})

// 2. Define a submit handler.
function onSubmit() {
  // call api
  if (false) 
    return toast({ title: 'Sign up failed. Please try again'
    })
}

  return (
    <div>
      <Form {...form}>
        <div className="sm:w-420 center flex-col">
          <img src={logo} alt="Logo" />

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-6 text-white">Create a new account</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">To use linux social, please enter your account details</p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full mt-2 text-white">
            <FormField control={form.control} 
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" type="text" {...field} className="shad-input"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" type="text" {...field} className="shad-input"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" type="text" {...field} className="shad-input"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="text" {...field} className="shad-input"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" type="text" {...field} className="shad-input"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="shad-button_primary">
              {isLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Loading...
                </div>
              ): "Sign up"}
            </Button>

            <p className="text-small-regular text-light-2 text-center mt-2">
              Already have an account?
              <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Login</Link>
            </p>
          </form>
        </div>
      </Form>
    </div>
  )
}

export default Signup