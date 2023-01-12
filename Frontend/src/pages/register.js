import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            firstName,
            lastName,
            email,
            password,
           
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                 caption={"Crea il tuo account"               
                }>
                <form onSubmit={submitForm}>
                    {/* First Name */}
                    <div className="mt-6">
                        <Label htmlFor="firstName">Inserisci il nome</Label>

                        <Input
                            id="firstName"
                            type="text"
                            value={firstName}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded"
                            onChange={event => setFirstName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.firstName} className="mt-2" />
                    </div>

                    {/* last name */}
                    <div className="mt-6">
                        <Label htmlFor="lastName">Inserisci il cognome</Label>

                        <Input
                            id="lastName"
                            type="text"
                            value={lastName}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded"
                            onChange={event => setLastName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.lastName} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Inserisci l’email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Inserisci la password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full border-t-0 border-l-0 border-r-0 border-b-1 border-black rounded-none focus:rounded"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-12">
                        <button className="h-[59px] w-full text-center text-white rounded-md hover:bg-blue-800 bg-[#0057FF] text-[20px] font-bold ">REGISTRATI</button>
                     </div>        

                     <div className="w-full flex items-center justify-center mt-12 text-black text-bold text-[13px]">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Hai già un account? Accedi
                        </Link>

                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
