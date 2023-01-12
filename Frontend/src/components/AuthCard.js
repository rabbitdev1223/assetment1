const AuthCard = ({ caption, children }) => (
    <div className="flex w-full flex-col items-center pt-[120px] ">
        <div className="font-[DM Sans] text-[#134077] text-[32px] font-bold">{caption}</div>
        <div className="w-full max-w-[662px] px-[36px] py-[46px] border border-solid border-[#134077] bg-white shadow-md overflow-hidden sm:rounded-xl">
            {children}
        </div>
    </div>
)

export default AuthCard
