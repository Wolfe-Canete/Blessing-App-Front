import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function CommentForm() {


    
    return (
        <Link to={`/comments/new`}>
            <Button className="btn btn-Success">
                Comment
            </Button>
        </Link>
        
    )
}