function Images({image}:{image:string[]}) {
    return ( 
 


        <div>
                <h1 className=" front-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
                <div className="flex flex-wrap">
                    {image.map((image:string)=>(
                        <img className="w-56 h-44 mr-1 mb-1"
                        src={image}
                        alt="" />
                    ))}
                </div>
        </div>
     );
}

export default Images;