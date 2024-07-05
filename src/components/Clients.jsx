const Clients = () => {
    return (
        <div className="mx-auto bg-[#F4F4F6] text-center rounded-lg px-24">
            <h1 className="text-3xl font-bold pt-6"> We are proud to work with </h1>
            <div className="grid grid-cols-7 gap-8 px-6 py-10">
                {Array.from({ length: 21 }).map((_, i) => <img key={i} src={`cli${i + 1}.png`} />)}
            </div>
        </div>
    )
}

export default Clients
