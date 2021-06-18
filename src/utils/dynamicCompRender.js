const DynamicComponent = ({ list, selected }) => {
  const Comp = list[selected];
  return <Comp />;
};

export default DynamicComponent;
