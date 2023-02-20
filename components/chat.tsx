import { SVGProps } from "react";

type Props = {
  agent: String;
  content: String;
  svg: JSX.Element & SVGProps<SVGSVGElement>;
};

export default function Chat({ agent, content, svg }: Props) {
  return (
    <div className="flex  bg-gray-600  pb-10 pt-5">
      <div className="mr-4 flex-shrink-0">{svg}</div>
      <div>
        <h4 className="text-lg font-bold text-white">{agent}</h4>
        <p className="mt-1 text-lg pr-16  text-white">{content}</p>
      </div>
    </div>
  );
}
