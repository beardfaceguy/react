//When importing css files, need to point directly to the css file, including the extension
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
//when importing image files, need to include the extension
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Personal Digital Assitants</p>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Amazon assistant"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortanaBlue"
                image={CortanaImage}
                description="Cortana is a microsoft assistant"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@heySiri"
                image={SiriImage}
                description="Siri's being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
