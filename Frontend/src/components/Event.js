
const Event = ({  event , joinEvent, alreadyJoined }) => {
    
    return (
    <div className="bg-white border p-[20px] border-solid border-[#134077] bg-white sm:rounded-xl w-[30%] h-[200px]">
        <div className="text-3xl text-bold ">{event.nome_evento}</div>
        <div className="text-[#CCCCCC] text-[20px]">{event.data_evento}</div>
        <div className="flex items-center justify-center mt-3  ">
            {!alreadyJoined?
            (<button className="h-[59px] w-full text-center text-white rounded-md hover:bg-blue-800 bg-[#0057FF] text-[20px] font-bold" onClick={()=>joinEvent(event.id)}>JOIN</button>)
            :
            <div className="text-[#333333] text-[20px] mt-3">JOINED</div>}
        </div>
    </div>)
}

export default Event
