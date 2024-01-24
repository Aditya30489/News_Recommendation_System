

export function Posts2(props) {
    return (
        <div className="neat m-2 p-3 shadow rounded">
                    {/* <div>Id: {props.post.id} </div> */}
                    <div className='fo'>{props.get.Title}</div>
                    <div className='a'>Description: {props.get.Summary}</div>
        </div>
    )
}