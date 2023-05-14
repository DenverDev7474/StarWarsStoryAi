import { Container, Row, Col,Button } from 'react-bootstrap';
import '../../components/css/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>Welcome to the <b>Star Wars Story Generator</b>!</p>
          <p>In a galaxy not so far away, you have the power to create your own <b>epic Star Wars saga</b>!</p>
          <p>This is the place where your imagination meets the iconic universe of Star Wars. Choose your favorite characters, select a thrilling setting, and decide the adventurous plot of your story. Whether you're taking part in a daring <b>rescue mission</b>, embarking on a perilous <b>bounty hunting adventure</b>, or leading a <b>rebellion against the Empire</b>, your story is yours to shape.</p>
          <p>Craft your narrative with the wisdom of <b>Yoda</b>, the strength of <b>Darth Vader</b>, or the courage of <b>Luke Skywalker</b>. From the scorching dunes of <b>Tatooine</b> to the bustling cityscape of <b>Coruscant</b>, your tale can unfold anywhere in the Star Wars galaxy.</p>
          <p>Once you've forged your unique Star Wars story, don't keep it to yourself! <b>Share it with fellow Jedi, Sith, and Star Wars fans</b> across the galaxy on social media.</p>
          <p>So ignite your lightsabers, prepare your starships, and may the <b>Force be with you</b> on this exciting journey!</p>
          <p>Ready to begin? <Link to="/characters"><Button variant='warning'>Start Your Adventure</Button></Link> to unleash your creativity.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;