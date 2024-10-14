import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an impotant agreement for your to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales
        facilisis tellus, maximus tempus purus finibus at. Fusce justo neque,
        sollicitudin nec tellus non, posuere efficitur lacus. Aenean in
        tincidunt ligula, in vehicula lacus. Phasellus vel ultricies dolor. Sed
        ut dui vulputate arcu vestibulum rutrum et congue tellus. Aliquam
        convallis arcu magna, non ornare sapien aliquet eget. Donec facilisis
        lacus sit amet justo luctus facilisis.
      </p>
    </div>
  );
}

export default ModalPage;
