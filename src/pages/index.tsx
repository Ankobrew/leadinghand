import { useEffect } from "react";

import QuestionBox from "components/questionbox";
import Modal from "components/refbox";
import { useModalStore } from "store/modalstore";
import Chat from "components/chat";
import { useRouter } from "next/router";
import Image from "next/image";
import loading from "public/loading.gif";
import { useAnswerStore } from "store/answerstore";
import { useSourceStore } from "store/sourcestore";

function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  const truncatedString = str.substring(0, maxLength - 3);
  return truncatedString + "...";
}

export default function Home() {
  const router = useRouter();
  const question = router.query.question as string;
  const { isOpen, openModal, closeModal } = useModalStore();
  const { answer, fetchData } = useAnswerStore();
  const { currentSource, pageNumber, setSource } = useSourceStore();

  useEffect(() => {
    if (question) {
      fetchData(question);
    }
  }, [question, fetchData]);

  return (
    <div className="flex flex-row bg-gray-900 w-screen h-screen">
      <div className="flex flex-col bg-emerald-500 w-96 h-full">
        <div className="flex flex-row-reverse mr-6 h-10 mt-12">
          <div className="text-black h-10 w-18 ml-2 prose prose-xl">
            Leading Hand
          </div>
          <div className="h-10 w-10">
            <span role="img" aria-label="book" className="anticon anticon-book">
              <svg
                viewBox="0 0 1100 1100"
                focusable="false"
                data-icon="book"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="relative h-10 mt-10 mr-6">
          <div className="absolute text-white top-0 right-0 prose prose-sm">
            REFERENCES
          </div>
        </div>
        <div
          className="divide-y mx-6 bg-emerald-400 overflow-hidden "
          onClick={openModal}
        >
          <ul role="list" className="divide-y-8 text-white divide-emerald-500">
            {answer?.source.map((item, index) => (
              <li
                key={item}
                className="p-4"
                onClick={() => setSource(item, answer.page[index])}
              >
                {truncateString(item, 300)}
                {answer.page[index]}
              </li>
            ))}
          </ul>

          <Modal
            content={currentSource}
            pageNumber={pageNumber}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          ></Modal>
        </div>
      </div>
      <div className="relative bg-gray-900 h-full w-full ">
        {question && (
          <Chat
            agent={"Human"}
            content={question}
            svg={
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
            }
          ></Chat>
        )}
        {question && !answer && (
          <div className="bg-gray-900 h-80 mt-96 mx-72">
            <Image src={loading} alt="Loading" width={500} height={500} />
          </div>
        )}
        {answer && (
          <Chat
            agent={"AI"}
            content={answer.answers}
            svg={
              <svg
                className="h-16 w-16  text-white"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox=" -30 -2 250 250"
                aria-hidden="true"
              >
                <path
                  d="M178.078,53.525h-20.591V32.354c7.084-1.841,12.352-8.233,12.352-15.885C169.839,7.388,162.453,0,153.37,0
				c-9.084,0-16.47,7.388-16.47,16.469c0,7.652,5.268,14.044,12.352,15.885v21.171H58.667c-13.618,0-24.7,11.079-24.7,24.698v98.827
				c0,13.619,11.081,24.698,24.7,24.698h41.177v34.997h8.235v-34.997h20.587v34.997h8.235v-34.997h41.177
				c13.618,0,24.7-11.079,24.7-24.698V78.223C202.777,64.604,191.696,53.525,178.078,53.525z M145.135,16.469
				c0-4.541,3.695-8.235,8.235-8.235c4.539,0,8.235,3.693,8.235,8.235s-3.695,8.235-8.235,8.235S145.135,21.011,145.135,16.469z
				 M178.078,193.513H58.667c-9.079,0-16.465-7.386-16.465-16.463V78.223c0-9.077,7.386-16.463,16.465-16.463h119.41
				c9.079,0,16.465,7.386,16.465,16.463v98.827h0.001C194.543,186.127,187.157,193.513,178.078,193.513z"
                />
                <path
                  d="M153.37,144.106H83.375c-2.276,0-4.117,1.844-4.117,4.117v28.821c0,2.274,1.842,4.117,4.117,4.117h69.994
				c2.276,0,4.117-1.844,4.117-4.117v-28.821C157.487,145.949,155.645,144.106,153.37,144.106z M95.728,172.927h-8.235V152.34h8.235
				V172.927z M132.783,172.927h-28.821V152.34h28.821V172.927z M149.252,172.927h-8.235V152.34h8.235V172.927z"
                />
                <rect x="60.73" y="90.581" width="115.285" height="8.235" />
                <rect x="83.375" y="107.05" width="24.704" height="8.235" />
                <rect x="128.666" y="107.05" width="24.704" height="8.235" />
              </svg>
            }
          ></Chat>
        )}

        <div className=" bg-gray-900 mx-10 absolute inset-x-0 bottom-0 h-24 mb-28">
          <QuestionBox></QuestionBox>
        </div>
      </div>
    </div>
  );
}
