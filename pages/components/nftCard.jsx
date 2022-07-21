export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-200 rounded-b-lg h-110 ">
            <div className="">
                <h1 className="text-xl text-bold-black-900">{nft.title}</h1>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p className="text-gray-600">Contract Adr: {`${nft.contract.address.substr(0, 4)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-800">{nft.description?.substr(0,180)}</p>
            </div>
        
         <div className="flex justify-center mb-1">
             <a target={"_blank"} href= {`https://etherscan.io/token/${nft.contract.address}`} 
                className={"disabled:bg-slate-500 text-white bg-blue-500 px-3 py-3 mt-3 rounded-sm w-2,5/5"} 
                          
                >Ver en therscan</a>
             </div>
         </div>
    </div>
    )
}
