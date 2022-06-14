const BannerImages = (props) => {
  const text = props.text;
  const src = props.src;
  const height = props.height;
  return (
    <a href="/shop">
      <div className="relative text-center">
        <img src={src} className={height} alt={text} />
        <p className="absolute font-display text-xl w-full  bottom-1 text-sky-500">
          {text}
        </p>
      </div>
    </a>
  );
};
export default BannerImages;
