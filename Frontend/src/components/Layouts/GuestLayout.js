import { calculateOverrideValues } from 'next/dist/server/font-utils';
import Head from 'next/head'

const GuestLayout = ({ children }) => {

    return (
        <div className='bg-[url(/background.png)] bg-cover min-h-[100vh] w-[100vw] bg-no-repeat' >
            <Head>
                <title>MyApp</title>
            </Head>
            <div className=" rounded-b-xl  bg-white h-[127px] pl-12 flex items-center">
                
                 <img src="/logo.png"></img>
                
            </div>
            <div className="font-sans text-gray-900 antialiased flex w-full h-[calc(100vh_-_127px)]" >
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
