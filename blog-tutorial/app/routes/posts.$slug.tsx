import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  const post = await getPost(params.slug ?? "Whassup");
  return json({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData<typeof loader>();
  const title = post?.title ?? "Post not found";

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
    </main>
  );
}
