import Button from '../components/Button';
import { GoBell, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('hi there');
  };
  return (
    <div>
      <div>
        <Button>plain</Button>
      </div>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          Button1
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Click me
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          third button
        </Button>
      </div>
      <div>
        <Button warning>hey!</Button>
      </div>
      <div>
        <Button danger>It's the final button!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
