import { useRef } from "react";

const Tile = () => {
  const myElement = useRef();
  // js code

  return (
    <>
      <div>
        <h1>asdfasdfs</h1>
        <h2>divasdfasdf</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dolorem mollitia deleniti autem quas modi eveniet, vero molestiae,
          totam veritatis necessitatibus.
        </p>

        <input type="text" ref={myElement} />
      </div>

      <div>
        <h1>Title 2</h1>
      </div>

      <div>
        <h1>Title 3</h1>
      </div>
    </>
  );
};

export default Tile;
