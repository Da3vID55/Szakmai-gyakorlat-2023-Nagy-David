

interface PostProps
{
    id:number
    userId:number
    title:string
    body:string
}

export const Post = ({id,userId,title,body}:PostProps) => {
  return (
    <>
        <div className="Post">
            <div className="container postWrap">
                <div className="container text-start">
                    <div className="row">
                        <div className="col-10">
                            <h4 style={{fontWeight: 'bold'}}>{title}</h4>
                        </div>
                        <div className="col-2 text-end">
                            <p>{id}</p>
                        </div>
                    </div>
                    <div className="row">
                        <p>@{userId}</p>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
