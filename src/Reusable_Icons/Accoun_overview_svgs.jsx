function SvgWrap(props) {
  return (
    <div className="bg-white rounded p-[5px] inline-block">
      {props.children}
    </div>
  );
}

export default SvgWrap;
