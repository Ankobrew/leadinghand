import { useEffect } from "react";

import QuestionBox from "components/questionbox";
import Modal from "components/refbox";
import { useModalStore } from "store/modalstore";
import Chat from "components/chat";
import { useRouter } from "next/router";
import Image from "next/image";
import loading from "public/loading.gif";
import { useAnswerStore } from "store/answerstore";

export default function Home() {
  const router = useRouter();
  // const [data, setData] = useState<Answer | null>(null);
  // const [error, setError] = useState<Error | null>(null);
  const question = router.query.question as string;

  const { isOpen, openModal, closeModal } = useModalStore();
  const { answer, fetchData } = useAnswerStore();

  useEffect(() => {
    if (question) {
      fetchData();
    }
  }, [question, fetchData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000");
  //       const json = await response.json();
  //       setData(json);
  //     } catch (err) {
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
          <Modal
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          ></Modal>
          <div className=" px-4 text-white py-5 sm:px-6">
            Defence Force Discipline Act 1982
          </div>
          <div className="px-4 text-white py-5 sm:p-6">
            {" "}
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900 h-full w-full ">
        {question && <Chat agent={"Human"} content={question}></Chat>}
        {question && !answer && (
          <div className="bg-gray-900 h-80 mt-96 mx-72">
            <Image src={loading} alt="Loading" width={500} height={500} />
          </div>
        )}
        {answer && <Chat agent={"AI"} content={answer.answers}></Chat>}

        <div className=" bg-gray-900 mx-10 absolute inset-x-0 bottom-0 h-24 mb-28">
          <QuestionBox></QuestionBox>
        </div>
      </div>
    </div>
  );
}
