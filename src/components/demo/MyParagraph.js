const DemoOutput = (props) => {
  console.log('MyParagraph running');
  return <p>{props.children}</p>;
};

export default DemoOutput;