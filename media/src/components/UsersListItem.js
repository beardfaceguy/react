import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store/thunks/removeUser';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  // <> are jsx fragments, allowing you to write sections of jsx code that can be inserted into other jsx strings
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
