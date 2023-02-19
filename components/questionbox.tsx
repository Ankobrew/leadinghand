import { useAnswerStore } from "store/answerstore";

export default function QuestionBox() {
  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form action="#">
          <div className="border-b border-gray-700 focus-within:border-indigo-600">
            <label htmlFor="Question" className="sr-only">
              What Is Your Question
            </label>
            <textarea
              rows={4}
              name="question"
              id="question"
              className="block w-full resize-none border-0 border-b border-transparent bg-gray-700 p-0 pb-2 focus:border-indigo-600 text-white focus:ring-0 sm:text-sm"
              placeholder="What Is Your Question..."
              defaultValue={""}
              required
            />
          </div>
          <div className="flex justify-end pt-3">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
