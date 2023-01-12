import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (

        <div className='bg-[url(/background.png)] bg-cover min-h-[100vh] w-[100vw] bg-no-repeat' >
            <Navigation user={user} />
            <div className=" rounded-b-xl  bg-white h-[127px] pl-12 flex items-center">
                
                 <img src="/logo.png"></img>
                
            </div>
            <div className="font-sans text-gray-900 antialiased flex w-full h-[calc(100vh_-_127px)]" >
                {children}
            </div>
        </div>
        
    )
}

export default AppLayout
