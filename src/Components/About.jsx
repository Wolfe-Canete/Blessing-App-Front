import './styles/AboutStyle.css'
import Card from 'react-bootstrap/Card'
import wolfe from '../Assets/wolfe.jpg'
import canete from '../Assets/canete.jpg'

export default function About () {
    return (
        <div className='aboutCards'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={wolfe} />
                <Card.Body>
                    <Card.Title>Tyler Wolfe</Card.Title>
                    {/* <Card.Text>
                    Tyler Wolfe is a full-stack software developer with PLEASE COMPLETE YOUR ABOUT STATEMENT!
                    </Card.Text> */}
                </Card.Body>
                <Card.Body>
                    <Card.Link href="https://github.com/Wolfet262">GitHub</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/wolfe-tyler/">LinkedIn</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={canete} />
                <Card.Body>
                    <Card.Title>Joachim Canete</Card.Title>
                    {/* <Card.Text>
                    Joachim Canete is a full-stack software developer with a prior history in serving his community through after-school programs geare towards children and adults pursing a musical education.
                    </Card.Text> */}
                </Card.Body>
                <Card.Body>
                    <Card.Link href="https://github.com/CLNEulalia">GitHub</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/joachim-canete/">LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}