import '../Post/Post.css'
import { Button } from 'react-bootstrap'

export function Post(props) {
    return (
        <div className="neat m-2 p-3 shadow rounded">
                    {/* <div>Id: {props.post.id} </div> */}
                    <div className='fo'>{props.post.Title}</div>
                    <div>Domain: {props.post.Published}</div>
                    <div className='a'>Description: {props.post.Summary}</div>
                    <Button className="m-1" onClick={props.postclicked}>More...</Button>
        </div>
    )
}