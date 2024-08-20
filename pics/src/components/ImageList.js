import './ImageList.css';
 /* 
  Requirements for Keys

    Use Whenever we have a list of elements (so every 
    time we do a 'map')

    Add the key to the top-most JSX element in the list.  
    See explanation comment in renderedImages method below

    Key must be a string or number

    Should be unique for each list.  Can't concatinate 
    multiple lists together that use the same keys

    Should be consistent across rerenders.  Can use 
    keys that will be randomly generated each render
  
  What to use for Keys

    Most of the time we will be pulling information 
    from a database which will have already assigned
    a unique ID to the object.  Normally, you would use 
    those.  In case an ID doesn't exist, you can use an 
    index generated when pushing the objects into your list.
    Alternatively you could generate a unique ID yourself, likely a guid.

*/

import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    // The key always needs to be on the topmost element,
    // in this case being the <ImageShow /> element.
    // If ImageShow was wrapped in a <div> element,
    // the div would be the topmost element
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
