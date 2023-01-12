import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                caption={"Hai già un account?"               
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />
                    
                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div className="mt-6">
                        <Label htmlFor="email" className='text-black '>Inserisci l’e-mail</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password" className='text-black '>Inserisci la password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded" 
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>
                    
                    {/* Remember Me */}
                    {/* <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div> */}
                     <div className="flex items-center justify-end mt-12">
                        <button className="h-[59px] w-full text-center text-white rounded-md hover:bg-blue-800 bg-[#0057FF] text-[20px] font-bold ">ACCEDI</button>
                        
                     </div>

                     <div className="w-full flex items-center justify-center mt-12 text-black text-bold text-[13px]">
                        Non hai ancora un profilo?
                        <Link href="/register"
                        className="underline text-sm text-black hover:text-gray-900"
                        >Registrati</Link>
                        
                     </div>
                     <div className="w-full flex items-center justify-center mt-2 text-black text-bold text-[13px]">

                        <Link
                            href="/forgot-password"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Forgot your password?
                        </Link>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
