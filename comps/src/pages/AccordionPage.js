import Accordion from '../components/Accordion';
function AccordionPage() {
  const items = [
    {
      id: 'asdf',
      label: 'Can I use react on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want',
    },
    {
      id: 'qeqwe',
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want',
    },
    {
      id: 'ljkh',
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
