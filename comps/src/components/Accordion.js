import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // this version of handleClick is written to fix a bug where if you in-code click the same section twice in a row,
  // the setExpandedIndex isn't looking at the latest version of expandedIndex, due to batching.  Somehow, this version
  // guarantees that
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    // conditional ? true return value : false return value
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    // || returns the first truthy value
    // && returns the first falsey value or the last truthy value.
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
