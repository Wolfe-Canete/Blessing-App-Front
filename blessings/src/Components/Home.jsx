import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";

export default function Home() {
    const [blessings, setBlessings] = useState([])
  
    const fetchBlessings = async () => {
      await fetch('https://nameless-citadel-52825.herokuapp.com/blessings/')
      .then(res => res.json())
      .then(res => {
        setBlessings(res)
        console.log(res)
      })
    }
    useEffect(() => {
      fetchBlessings()
    }, []);
    return (
        <div>
            <div>
                <h1>Mind·ful·ness</h1>
                <h4>/ˈmīn(d)f(ə)lnəs/ (noun)</h4>
                <p>a mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations, used as a therapeutic technique.</p>

                <h3>What Is Mindfulness?</h3>
                <p>Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.</p>
                <p>It's easy to think that our thoughts flow naturally from somewhere deep inside us - out of our control. If we're mindful, we decide if our thoughts are consistent with our values and we adjust them. If we're mindful, the character and pattern of our thoughts are based on intention, rather than  reactions to the stimuli of the world and our habitual thought processes.</p>

                <h3>About This App</h3>
                <p>The Bite-Sized Book Of Itty Bitty Blessings was founded on the principle in mental health awareness known as mindfulness, a commonly practiced exercise in grounding one's self in both serenity and strife. Everyday people from all walks of life (victims, survivors, or folks just in pursuit of balance) practice mindfulness in all sorts of ways, but the most familiar approach is to recognize the blessings one has experienced, big and small. Through this app, the user will be able to share their blessing(s) insights on what it means to them, etc. Fellow users should also be able to view and comment on these posted blessing, but not make any edits to the posted blessing itself, or fellow user comments.</p>
            </div>

            <Carousel>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <Link to='/blessings'>
                Blessings List
            </Link>
        </div>
    )
}