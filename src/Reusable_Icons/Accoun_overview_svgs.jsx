function SvgWrap(props) {
  return (
    <div className="bg-white rounded p-[5px] lg:self-start inline-block">
      {props.children}
    </div>
  );
}

export default SvgWrap;
