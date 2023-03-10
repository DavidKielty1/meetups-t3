import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";

type Comment = RouterOutputs["comment"]["getAll"][0];

export const CommentCard = ({
  comment,
  onDelete,
}: {
  comment: Comment;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title text-xl font-bold">
            {comment.title}
          </div>
          <div className="collapse-contet">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{comment.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="car-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
