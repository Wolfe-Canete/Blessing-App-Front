import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import imgOne from '../Assets/first_slide.jpeg';
import imgTwo from '../Assets/second_slide.jpeg';
import mindful from '../Assets/mindfulness_banner.jpeg'
import './styles/HomeStyles.css'

export default function Home() {
    return (
        <div className='homeCards'>

            <Card className="about">
                <Card.Header>Mind·ful·ness (noun)</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    
                        {' '}
                        A mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations, used as a therapeutic technique.
                        {' '}
                    
                    <footer className="blockquote-footer">
                        Defined in <cite title="Source Title">Oxford Languages</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="about">
                <Card.Img variant="top" src={mindful} />
                <Card.Body>
                <Card.Text>
                    Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.
                    <br/>
                    It's easy to think that our thoughts flow naturally from somewhere deep inside us - out of our control. If we're mindful, we decide if our thoughts are consistent with our values and we adjust them. If we're mindful, the character and pattern of our thoughts are based on intention, rather than  reactions to the stimuli of the world and our habitual thought processes.
                </Card.Text>
                </Card.Body>
            </Card>
            
            <Card className="about">
                <Card.Header>About This App</Card.Header>
                <Card.Body>
                    <Card.Title>An Exercise In Mindfulness</Card.Title>
                    <Card.Text>
                        The Bite-Sized Book Of Itty Bitty Blessings was founded on the principle in mental health awareness known as mindfulness, a commonly practiced exercise in grounding one's self in both serenity and strife. Everyday people from all walks of life (victims, survivors, or folks just in pursuit of balance) practice mindfulness in all sorts of ways, but the most familiar approach is to recognize the blessings one has experienced, big and small. Through this app, the user will be able to share their blessing(s) insights on what it means to them, etc. Fellow users should also be able to view and comment on these posted blessing, but not make any edits to the posted blessing itself, or fellow user comments.
                    </Card.Text>
                    <Link to="/blessings/new">
                        <Button variant="primary">Share A Blessing</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Carousel className="about-slide">
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={imgOne} alt="first slide"/>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={imgTwo} alt="second slide"/>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}