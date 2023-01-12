import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Event from '@/components/Event'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {

    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })
    const [events, setEvents] = useState([])
    useEffect(() => {
        
        axios
          .get("/events" )
          .then((res) => {
          
            setEvents(res.data);
            
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const joinEvent = (event) => {
        
        axios
        .post(
            `/join`,
            {event : event,token: router.query.token}
            
        )
        .then(res => {
            setEvents(res.data);
        })
        .catch(error => {
           
        });
    };
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="p-[150px] py-[170px] w-[100%] flex flex-direction-row flex-wrap justify-between">
                {events? events.map((event,num) => (
                    <Event 
                        event={event}
                        joinEvent={joinEvent}
                        alreadyJoined = {event.attendees.search(user.email) > 0}
                    />    
                )):""}
            </div>
        </AppLayout>
    )
}

export default Dashboard
