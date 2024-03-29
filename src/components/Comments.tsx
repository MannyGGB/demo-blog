import React from "react";
import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 0 },
    });
    const response = await commentsResult.json();
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <CommentForm postSlug={postSlug} />
      <h2>| Comments |</h2>
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.username} says...
            <br />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
}
