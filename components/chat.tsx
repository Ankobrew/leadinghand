type Props = {
  agent: String;
  content: String;
};

export default function Chat({ agent, content }: Props) {
  return (
    <div className="flex  bg-gray-600  pb-10 pt-5">
      <div className="mr-4 flex-shrink-0">
        <svg
          className="h-16 w-16  text-white"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="-30 -20 200 200"
          aria-hidden="true"
        >
          <path
            d="M58.732,173.304h96.756c0,0-28.077-22.566-27.486-47.307c0.354-13.785,27.486-31.334,27.353-69.638
		c-0.085-19.263-18.767-51.286-50.491-55.277C73.136-2.916,49.392,4.068,39.016,23.63C28.627,43.182,27.842,60.351,28.64,63.535
		c0.807,3.199,4.192,9.186,4.192,9.186s-15.962,24.542-14.973,28.53c1.011,4.001,11.959,6.15,11.959,6.15s0.993,2.776-1.008,8.159
		c-1.997,5.396,3.714,11.648,5.432,13.835c1.69,2.174-2.402,8.969-1.011,12.769c1.395,3.781,7.986,8.372,15.564,7.38
		c7.587-1.004,17.32-2.789,20.7-3.397C77.127,164.109,58.732,173.304,58.732,173.304z M100.072,114.812
		c-7.265,0-12.196-5.346-12.196-12.471c0-7.271,5.06-12.471,12.196-12.471c7.404,0,12.202,5.207,12.337,12.471
		C112.409,109.459,107.476,114.812,100.072,114.812z M101.984,19.395c18.103,0,26.323,10.008,26.323,21.382
		c0,10.419-6.442,17.272-11.643,23.032c-5.078,5.617-7.137,10.967-6.996,17.135v2.472H91.437l-0.131-3.562
		c-0.405-6.996,1.915-14.124,8.083-21.525c4.385-5.207,7.947-9.596,7.947-14.254c0-4.802-3.148-7.95-10.005-8.224
		c-4.519,0-10.005,1.647-13.57,4.116L79.11,25.027C84.036,22.138,92.247,19.395,101.984,19.395z"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold text-white">{agent}</h4>
        <p className="mt-1 text-lg text-white">{content}</p>
      </div>
    </div>
  );
}
